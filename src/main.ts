import "./style.css";
import * as d3 from "d3";
import mockData from "./data";
import {
  getDomainWithPadding,
  getMinMaxDates,
  splitText,
} from "./utils";
import {
  PointEvent,
  ProcessedPointEvent,
  ProcessedSpanEvent,
  SpanEvent,
} from "./types";
import pointEventElement from "./elements/pointEventElement";
import spanEventElement from "./elements/spanEventElement";

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
    .append(spanEventElement)
    .classed("spanEvent", true)
    .attr("x", (d) => scaleX(d.start))
    .attr("y", axisHeight)
    .attr("width", (d) => scaleX(d.end) - scaleX(d.start))
    .attr("height", spanEventHeight)
    .on("click", function (_, event) {
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
        .attr("height", "50%");

      d3.select(this)
        .select(".content")
        .transition(transition)
        .attr("height", "50%")
        .attr("y", "50%");

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
          .attr("height", "80%");

        previousSelectedEvent
          .select(".content")
          .transition(transition)
          .attr("height", "20%")
          .attr("y", "80%");

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

  let activePointEvent: ProcessedPointEvent | undefined =
    undefined;
  svg
    .selectAll(".pointEvent")
    .data(pointEvents)
    .enter()
    .append((d) =>
      pointEventElement(d, {
        alignInfoBox:
          +d.date > domainMid ? "right" : "left",
        circleRadius: pointEventRadius,
      })
    )
    .attr(
      "x",
      (d) =>
        scaleX(d.date) -
        pointEventRadius -
        (+d.date > domainMid ? 400 : 0)
    )
    .on("mouseover", function (_, d) {
      if (activePointEvent) {
        return;
      }
      activePointEvent = d;
      d3.selectAll(".pointEvent").sort((a, _) =>
        a === d ? 1 : -1
      );

      d3.select(`#circleClipPath_${d.id} circle`)
        .transition("showPointEventInfo")
        .duration(500)
        .ease(d3.easePolyIn)
        .attr("r", 1000);
    })
    .on("mouseleave", function (_, d) {
      if(activePointEvent === d) {
        activePointEvent = undefined;
      }
      d3.select(`#circleClipPath_${d.id} circle`)
        .transition("hidePointEventInfo")
        .duration(500)
        .ease(d3.easePolyOut)
        .attr("r", pointEventRadius);
    });

  return svg.node()!;
}

document
  .getElementById("app")
  ?.appendChild(createTimeline(mockData));
