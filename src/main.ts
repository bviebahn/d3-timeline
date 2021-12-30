import "./style.css";
import * as d3 from "d3";
import markdownIt from "markdown-it";
import mockData, { PointEvent, SpanEvent } from "./data";
import { getMinMaxDates } from "./utils";

type ProcessedSpanEvent = Omit<
  SpanEvent,
  "start" | "end"
> & {
  start: Date;
  end: Date;
  weight: number;
  y: number;
  height: number;
};

type ProcessedPointEvent = Omit<PointEvent, "date"> & {
  date: Date;
};

const TOPIC_COLORS = {
  Menschen: "#f94144",
  Ort: "#38b000",
  Produktion: "#3a86ff",
};
const md = markdownIt();

function processEvents(
  events: (SpanEvent | PointEvent)[]
): (
  | Omit<ProcessedSpanEvent, "y" | "height">
  | ProcessedPointEvent
)[] {
  return events.map((e) => {
    if ("date" in e) {
      return {
        ...e,
        date: new Date(e.date),
      };
    }
    return {
      ...e,
      start: new Date(e.start),
      end: e.end ? new Date(e.end) : new Date(),
      weight: e.weight || 1,
    };
  });
}

function processSpanEvents(
  events: Omit<ProcessedSpanEvent, "y" | "height">[],
  referenceHeight: number
): ProcessedSpanEvent[] {
  const eventsSortedByWeight = events.sort(
    (a, b) => b.weight - a.weight
  );

  let totalHeight = 0;
  return eventsSortedByWeight
    .reduce((acc, cur) => {
      let y = 0;
      while (true) {
        const overlap = acc.find(
          (e) =>
            cur.start < e.end &&
            cur.end > e.start &&
            y < e.y + e.weight &&
            y + cur.weight > e.y
        );

        if (!overlap) {
          break;
        }

        y = overlap.y + overlap.weight;
      }
      if (y + cur.weight > totalHeight) {
        totalHeight = y + cur.weight;
      }
      acc.push({ ...cur, y });
      return acc;
    }, [] as Omit<ProcessedSpanEvent, "height">[])
    .map((event) => ({
      ...event,
      y: (event.y / totalHeight) * referenceHeight,
      height:
        (event.weight / totalHeight) * referenceHeight,
    }));
}

function getPointEventY(topic: string) {
  return topic === "Menschen"
    ? 40
    : topic === "Ort"
    ? 60
    : 80;
}

function getDomainWithPadding(
  start: Date,
  end: Date,
  padding: number
) {
  const timeSpan = +end - +start;
  return [
    new Date(+start - timeSpan * padding),
    new Date(+end + timeSpan * padding),
  ];
}

const axisHeight = 100;
const spanEventsTotalHeight = 400;
const selectedSpanEventHeight = 600;
const width = 1000;
const height = 800;

function createTimeline(
  events: (SpanEvent | PointEvent)[]
) {
  let selectedSpanEvent: ProcessedSpanEvent;
  const processedEvents = processEvents(events);
  const [spanEvents, pointEvents] = processedEvents.reduce(
    (acc, cur) => {
      if ("date" in cur) {
        acc[1].push(cur);
      } else {
        acc[0].push(cur);
      }
      return acc;
    },
    [[], []] as [
      Omit<ProcessedSpanEvent, "y" | "height">[],
      ProcessedPointEvent[]
    ]
  );
  const processedSpanEvents = processSpanEvents(
    spanEvents,
    spanEventsTotalHeight
  );
  const allDates = processedEvents.reduce((acc, cur) => {
    if ("date" in cur) {
      acc.push(cur.date);
    } else {
      acc.push(cur.start);
      acc.push(cur.end);
    }
    return acc;
  }, [] as Date[]);
  const [minDate, maxDate] = getMinMaxDates(allDates);
  const domain = getDomainWithPadding(
    minDate,
    maxDate,
    0.05
  );

  const scaleX = d3
    .scaleUtc()
    .domain(domain)
    .range([0, width]);

  const svg = d3
    .create("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);

  svg
    .selectAll(".spanEvent")
    .data(processedSpanEvents)
    .enter()
    .append(function (event) {
      const eventElement = d3
        .create("svg")
        .classed("spanEvent", true);

      eventElement
        .append("image")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("preserveAspectRatio", "xMidYMid slice")
        .attr("href", event.image);

      eventElement
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("stroke", "#000")
        .attr("stroke-width", 2)
        .attr("fill", "transparent");

      return eventElement.node();
    })
    .attr("x", (d) => scaleX(d.start))
    .attr("y", (d) => d.y + axisHeight)
    .attr("width", (d) => scaleX(d.end) - scaleX(d.start))
    .attr("height", (d) => d.height)
    .on("click", function (_, event) {
      console.log(event);
      const eventDomain = getDomainWithPadding(
        event.start,
        event.end,
        0.5
      );

      scaleX.domain(eventDomain);

      const transition: any = d3
        .transition()
        .duration(1000)
        .ease(d3.easePolyInOut);

      axisGroup
        .transition(transition)
        .call(d3.axisTop(scaleX).tickSize(80));

      d3.selectAll<SVGCircleElement, ProcessedPointEvent>(
        ".pointEvent"
      )
        .transition(transition)
        .attr("cx", (d) => scaleX(d.date));

      const spanEvents = d3.selectAll<
        SVGElement,
        ProcessedSpanEvent
      >(".spanEvent");

      spanEvents
        .transition(transition)
        .attr("x", (d) => scaleX(d.start))
        .attr("y", (d) => {
          return (
            axisHeight +
            (d.y - event.y) *
              (selectedSpanEventHeight / event.height)
          );
        })
        .attr(
          "width",
          (d) => scaleX(d.end) - scaleX(d.start)
        )
        .attr(
          "height",
          (d) =>
            d.height *
            (selectedSpanEventHeight / event.height)
        );

      d3.select(this)
        .select("image")
        .transition(transition)
        .attr("height", "50%");

      if (selectedSpanEvent) {
        spanEvents
          .filter((d) => d === selectedSpanEvent)
          .select("image")
          .transition(transition)
          .attr("height", "100%");
      }

      selectedSpanEvent = event;
    });

  const axis = d3.axisTop(scaleX).tickSize(80);
  svg
    .append("rect")
    .attr("width", "100%")
    .attr("height", axisHeight)
    .attr("fill", "#fff");

  const axisGroup = svg
    .append("g")
    .call(axis)
    .attr("transform", `translate(0, ${axisHeight})`)
    .attr("fill", "#fff")
    .attr("stroke-width", 2);

  svg
    .selectAll(".pointEvent")
    .data(pointEvents)
    .enter()
    .append("svg:circle")
    .classed("pointEvent", true)
    .attr("cx", (d) => scaleX(d.date))
    .attr("cy", (d) => getPointEventY(d.topic))
    .attr("r", 8)
    .attr("fill", (d) => TOPIC_COLORS[d.topic])
    .attr("stroke-width", 1)
    .attr("stroke", "#00000088")
    .on("mouseover", function (_, d) {
      const pointX = scaleX(d.date);
      const x =
        pointX < width / 2
          ? pointX + 20
          : pointX - 20 - 400;
      const y = getPointEventY(d.topic) + 20;

      const pointEventInfoGroup = svg
        .append("svg:g")
        .classed("pointEventInfo", true);

      pointEventInfoGroup
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", 400)
        .attr("height", 600)
        .attr("fill", "#fff")
        .attr("stroke", "#000");

      pointEventInfoGroup
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", 400)
        .attr("height", 20)
        .attr("fill", TOPIC_COLORS[d.topic]);

      pointEventInfoGroup
        .append("svg:text")
        .attr("x", x + 4)
        .attr("y", y + 15)
        .attr("fill", "#fff")
        .text(d.topic);
    })
    .on("mouseleave", function (_, d) {
      svg.select(".pointEventInfo").remove();
    });

  return svg.node()!;
}

document
  .getElementById("app")
  ?.appendChild(createTimeline(mockData));
