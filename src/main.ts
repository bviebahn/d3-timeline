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
): (ProcessedSpanEvent | ProcessedPointEvent)[] {
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
    };
  });
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

function splitText(text: string, maxLineLength: number) {
  const words = text.split(" ");
  return words.reduce(
    (acc, cur) => {
      const lastLine = acc[acc.length - 1];
      if (lastLine.length + cur.length <= maxLineLength) {
        acc[acc.length - 1] = `${
          acc[acc.length - 1]
        } ${cur}`;
      } else {
        acc.push(cur);
      }
      return acc;
    },
    [""]
  );
}

function createPointEventElement(
  event: ProcessedPointEvent,
  alignInfoBox: "left" | "right"
) {
  const width = 400;
  const maxHeight = 600;
  const imageHeight = width / (16 / 9);
  const headerHeight = 30;
  const backgroundColor = "#111";

  const titleLines = splitText(event.title, 40);
  const textLines = splitText(event.text, 52);

  const height =
    headerHeight +
    imageHeight +
    titleLines.length * 20 +
    textLines.length * 16 +
    30;

  const eventElement = d3
    .create("svg")
    .classed("pointEvent", true)
    .attr(
      "y",
      getPointEventY(event.topic) - pointEventRadius
    )
    .attr("height", Math.min(height, maxHeight));
  const clipPathId = `circleClipPath_${event.id}`;

  eventElement
    .append("defs")
    .append("svg:clipPath")
    .attr("id", clipPathId)
    .append("svg:circle")
    .attr(
      "cx",
      alignInfoBox === "left"
        ? pointEventRadius
        : width - pointEventRadius
    )
    .attr("cy", pointEventRadius)
    .attr("r", pointEventRadius);

  const clipGroup = eventElement
    .append("svg:g")
    .attr("clip-path", `url(#${clipPathId})`);

  clipGroup
    .append("rect")
    .attr("width", width)
    .attr("height", headerHeight)
    .attr("fill", TOPIC_COLORS[event.topic]);

  clipGroup
    .append("rect")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", "100%")
    .attr("fill", backgroundColor);

  clipGroup
    .append("text")
    .attr("x", width / 2 - event.topic.length * 4)
    .attr("y", 20)
    .text(event.topic)
    .attr("fill", backgroundColor)
    .attr("font-size", 16);

  clipGroup
    .append("image")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", imageHeight)
    .attr("preserveAspectRatio", "xMidYMid slice")
    .attr("href", event.image)
    .style("cursor", "pointer");

  clipGroup
    .selectAll(".titleLine")
    .data(titleLines)
    .enter()
    .append("text")
    .attr("x", 10)
    .attr("y", (_, i) => imageHeight + 50 + i * 20)
    .text((d) => d)
    .attr("fill", "#ccc")
    .style("font-size", 16)
    .style("font-weight", "bold");

  clipGroup
    .selectAll(".textLine")
    .data(textLines)
    .enter()
    .append("text")
    .attr("x", 10)
    .attr(
      "y",
      (_, i) =>
        imageHeight + 50 + titleLines.length * 20 + i * 16
    )
    .text((d) => d)
    .attr("fill", "#ccc")
    .style("font-size", 12);

  return eventElement.node();
}

const axisHeight = 100;
const spanEventHeight = 600;
const width = 1000;
const height = 800;
const pointEventRadius = 8;

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
      ProcessedSpanEvent[],
      ProcessedPointEvent[]
    ]
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

  const grayTransparentGradient = svg
    .append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "grayTransparentGradient")
    .attr("gradientTransform", "rotate(90)");

  grayTransparentGradient
    .append("svg:stop")
    .attr("offset", "5%")
    .attr("stop-color", "#00000022");

  grayTransparentGradient
    .append("svg:stop")
    .attr("offset", "95%")
    .attr("stop-color", "#222");

  svg
    .selectAll(".spanEvent")
    .data(spanEvents)
    .enter()
    .append(function (event) {
      const x = scaleX(event.start);
      const width = scaleX(event.end) - scaleX(event.start);

      const eventElement = d3
        .select(this)
        .append("svg")
        .classed("spanEvent", true)
        .attr("x", x)
        .attr("y", axisHeight)
        .attr("width", width)
        .attr("height", spanEventHeight);

      eventElement
        .append("image")
        .attr("width", "100%")
        .attr("height", spanEventHeight * 0.8)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .attr("href", event.image);

      const contentElement = eventElement
        .append("svg")
        .classed("content", true)
        .attr("y", spanEventHeight * 0.8)
        .attr("width", "100%")
        .attr("height", spanEventHeight * 0.2);

      contentElement
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "#222");

      contentElement
        .append("text")
        .text(event.title)
        .attr("x", 10)
        .attr("y", 20)
        .attr("fill", "#fff");

      contentElement
        .selectAll(".spanEventText")
        .data(splitText(event.text, 65))
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", 10)
        .attr("y", (_, i) => 40 + i * 16)
        .style("font-size", 12)
        .attr("fill", "#ccc");

      contentElement
        .append("rect")
        .classed("contentGradient", true)
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "url(#grayTransparentGradient)");

      eventElement
        .append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "transparent")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);

      return eventElement.node();
    })
    .on("click", function (_, event) {
      console.log(event);
      const eventDomain = getDomainWithPadding(
        event.start,
        event.end,
        0.5
      );
      const eventDomainMid =
        +eventDomain[0] +
        (+eventDomain[1] - +eventDomain[0]) / 2;

      scaleX.domain(eventDomain);

      const transition: any = d3
        .transition()
        .duration(1000)
        .ease(d3.easePolyInOut);

      axisGroup
        .transition(transition)
        .call(d3.axisTop(scaleX).tickSize(80));

      d3.selectAll<SVGElement, ProcessedPointEvent>(
        ".pointEvent"
      )
        .transition(transition)
        .attr(
          "x",
          (d) =>
            scaleX(d.date) -
            pointEventRadius -
            (+d.date > eventDomainMid ? 400 : 0)
        )
        .select("clipPath circle")
        .attr("cx", (d) => {
          return +d.date > eventDomainMid
            ? 400 - pointEventRadius
            : pointEventRadius;
        });

      const spanEvents = d3.selectAll<
        SVGElement,
        ProcessedSpanEvent
      >(".spanEvent");

      spanEvents
        .transition(transition)
        .attr("x", (d) => scaleX(d.start))
        .attr(
          "width",
          (d) => scaleX(d.end) - scaleX(d.start)
        );

      d3.select(this)
        .select("image")
        .transition(transition)
        .attr("height", spanEventHeight * 0.5);

      d3.select(this)
        .select(".content")
        .transition(transition)
        .attr("height", spanEventHeight * 0.5)
        .attr("y", spanEventHeight * 0.5);

      d3.select(this)
        .select(".contentGradient")
        .attr("fill", "transparent");

      if (
        selectedSpanEvent &&
        selectedSpanEvent !== event
      ) {
        const previousSelectedEvent = spanEvents.filter(
          (d) => d === selectedSpanEvent
        );

        previousSelectedEvent
          .select("image")
          .transition(transition)
          .attr("height", spanEventHeight * 0.8);

        previousSelectedEvent
          .select(".content")
          .transition(transition)
          .attr("height", spanEventHeight * 0.2)
          .attr("y", spanEventHeight * 0.8);

        previousSelectedEvent
          .select(".contentGradient")
          .attr("fill", "url(#grayTransparentGradient)");
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
  const domainMid =
    +domain[0] + (+domain[1] - +domain[0]) / 2;

  svg
    .selectAll(".pointEvent")
    .data(pointEvents)
    .enter()
    .append((d) =>
      createPointEventElement(
        d,
        +d.date > domainMid ? "right" : "left"
      )
    )
    .attr(
      "x",
      (d) =>
        scaleX(d.date) -
        pointEventRadius -
        (+d.date > domainMid ? 400 : 0)
    )
    .on("mouseover", function (_, d) {
      d3.selectAll(".pointEvent").sort((a, _) =>
        a === d ? 1 : -1
      );

      d3.select(`#circleClipPath_${d.id} circle`)
        .transition()
        .duration(500)
        .ease(d3.easePolyIn)
        .attr("r", 1000);
    })
    .on("mouseleave", function (_, d) {
      d3.select(`#circleClipPath_${d.id} circle`)
        .transition()
        .duration(500)
        .ease(d3.easePolyOut)
        .attr("r", pointEventRadius);
    });

  return svg.node()!;
}

document
  .getElementById("app")
  ?.appendChild(createTimeline(mockData));
