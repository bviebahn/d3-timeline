import "./style.css";
import * as d3 from "d3";
import mockData from "./data";
import {
  getDomainWithPadding,
  getMaxOverlappingEvents,
  getMinMaxDates,
} from "./utils";
import {
  PointEvent,
  ProcessedPointEvent,
  ProcessedSpanEvent,
  SpanEvent,
} from "./types";
import pointEventElement from "./elements/pointEventElement";
import spanEventElement from "./elements/spanEventElement";
import tooltip from "./elements/tooltip";

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

const axisSpanEventsGap = 50;
const spanEventMargin = 20;
const width = 1000;
const height = 600;
const pointEventRadius = 8;

function createTimeline(events: (SpanEvent | PointEvent)[]) {
  let selectedSpanEvent: ProcessedSpanEvent | undefined;
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
    [[], []] as [ProcessedSpanEvent[], ProcessedPointEvent[]]
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
  const domain = getDomainWithPadding(minDate, maxDate, 0.05);

  const scaleX = d3.scaleUtc().domain(domain).range([0, width]);
  const axisHeight =
    getMaxOverlappingEvents(pointEvents, scaleX, pointEventRadius) * 20 + 100;

  const spanEventHeight = height - axisHeight - axisSpanEventsGap;

  const axis = d3.axisTop(scaleX).tickSize(axisHeight - 20);

  const svg = d3.create("svg").attr("viewBox", `0 0 ${width} ${height}`);

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

  const spanEventWidth = (width - spanEventMargin * 2) / spanEvents.length;

  const getSpanEventX = (index: number) =>
    index * spanEventWidth + spanEventMargin;

  const axisGroup = svg
    .append("g")
    .call(axis)
    .attr("transform", `translate(0, ${axisHeight})`)
    .attr("fill", "#fff")
    .attr("stroke-width", 2)
    .style("font-size", 18)
    .style("font-family", "FiraCode")
    .style("cursor", "grab");

  const dragHandler = d3.drag();
  const maxDragDomain = getDomainWithPadding(domain[0], domain[1], 0.2);
  dragHandler.on("drag", (e) => {
    const curDomain = scaleX.domain();
    const curDomainLength = +curDomain[1] - +curDomain[0];
    const diff = (e.dx * curDomainLength) / 1000;
    // console.log(diff);
    if (e.dx < 0) {
      const newEnd = Math.min(+curDomain[1] - diff, +maxDragDomain[1]);
      const newStart = +curDomain[0] + (newEnd - +curDomain[1]);
      console.log(newStart, newEnd);
      updateScale(
        [new Date(newStart), new Date(newEnd)],
        d3.transition("dragScale").duration(0)
      );
    } else {
      const newStart = Math.max(+curDomain[0] - diff, +maxDragDomain[0]);
      const newEnd = +curDomain[1] + (newStart - +curDomain[0]);
      console.log(newStart, newEnd);
      updateScale(
        [new Date(newStart), new Date(newEnd)],
        d3.transition("dragScale").duration(0)
      );
    }
  });
  dragHandler(axisGroup as any);

  const updateScale = (newDomain: [Date, Date], transition: any) => {
    scaleX.domain(newDomain);
    const newDomainMid = +newDomain[0] + (+newDomain[1] - +newDomain[0]) / 2;

    axisGroup
      .transition(transition)
      .call(d3.axisTop(scaleX).tickSize(axisHeight - 20));

    d3.selectAll<SVGElement, ProcessedPointEvent>(".pointEvent")
      .transition(transition)
      .attr(
        "x",
        (d) =>
          scaleX(d.date) - pointEventRadius - (+d.date > newDomainMid ? 400 : 0)
      )
      .select("clipPath circle")
      .attr("cx", (d) => {
        return +d.date > newDomainMid
          ? 400 - pointEventRadius
          : pointEventRadius;
      });

    d3.selectAll<SVGElement, ProcessedSpanEvent>(".spanEvent")
      .transition(transition)
      .attr("x", (d, i) =>
        selectedSpanEvent ? scaleX(d.start) : getSpanEventX(i)
      )
      .attr("width", (d) =>
        selectedSpanEvent ? scaleX(d.end) - scaleX(d.start) : spanEventWidth
      );

    d3.selectAll(".spanEventDateLine").each(function (d: any, i) {
      d3.select(this).property("updateScale")({
        startSpanX: selectedSpanEvent ? scaleX(d.start) : getSpanEventX(i),
        startRealX: scaleX(d.start),
        endSpanX: selectedSpanEvent ? scaleX(d.end) : getSpanEventX(i + 1),
        endRealX: scaleX(d.end),
        transition,
      });
    });
  };

  const setSelectedSpanEvent = (event: ProcessedSpanEvent | undefined) => {
    const newDomain = getDomainWithPadding(
      event ? event.start : minDate,
      event ? event.end : maxDate,
      event ? 0.5 : 0.05
    );

    const transition: any = d3
      .transition("setSelectedSpanEvent")
      .duration(1000)
      .ease(d3.easePolyInOut);

    const previousSpanEvent = selectedSpanEvent;
    selectedSpanEvent = event;
    updateScale(newDomain, transition);

    const spanEvents = d3.selectAll<SVGElement, ProcessedSpanEvent>(
      ".spanEvent"
    );

    spanEvents.style("cursor", (d) => (d === event ? "default" : "pointer"));

    const thisSpanEvent = spanEvents.filter((d) => d === event);

    thisSpanEvent.select("image").transition(transition).attr("height", "50%");

    thisSpanEvent
      .select(".content")
      .transition(transition)
      .attr("height", "50%")
      .attr("y", "50%");

    thisSpanEvent.select(".contentGradient").attr("fill", "transparent");

    if (previousSpanEvent && previousSpanEvent !== event) {
      const previousSelectedEventElement = spanEvents.filter(
        (d) => d === previousSpanEvent
      );

      previousSelectedEventElement
        .select("image")
        .transition(transition)
        .attr("height", "80%");

      previousSelectedEventElement
        .select(".content")
        .transition(transition)
        .attr("height", "20%")
        .attr("y", "80%");

      previousSelectedEventElement
        .select(".contentGradient")
        .attr("fill", "url(#grayTransparentGradient)");
    }
  };

  svg
    .selectAll(".spanEvent")
    .data(spanEvents)
    .enter()
    .append((event) =>
      spanEventElement(event, {
        onCompress: () => {
          setSelectedSpanEvent(undefined);
        },
      })
    )
    .classed("spanEvent", true)
    .attr("x", (_, i) => getSpanEventX(i))
    .attr("y", axisHeight + axisSpanEventsGap)
    .attr("width", spanEventWidth)
    .attr("height", spanEventHeight)
    .style("cursor", "pointer")
    .on("click", function (_, event) {
      if (event === selectedSpanEvent) {
        return;
      }
      setSelectedSpanEvent(event);
    })
    .on("mouseover", function (_, event) {
      svg
        .selectAll(".spanEventDateLine")
        .filter((d: any) => d === event)
        .each(function () {
          d3.select(this).property("highlight")(true);
        });
    })
    .on("mouseleave", function (_, event) {
      svg
        .selectAll(".spanEventDateLine")
        .filter((d: any) => d === event)
        .each(function () {
          d3.select(this).property("highlight")(false);
        });
    });

  svg
    .selectAll(".spanEventDateLine")
    .data(spanEvents)
    .enter()
    .append(function (event, i) {
      const startX = scaleX(event.start);
      const endX = scaleX(event.end);
      const group = d3.create("svg:g");

      const y1 = axisHeight;
      const y2 = axisHeight + axisSpanEventsGap;

      const path = group
        .append("svg:polygon")
        .attr(
          "points",
          `${getSpanEventX(
            i
          )},${y2} ${startX},${y1} ${endX},${y1} ${getSpanEventX(i + 1)}, ${y2}`
        )
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("fill", "transparent")
        .attr("stroke-linejoin", "bevel");

      const startCircle = group
        .append("circle")
        .attr("cx", startX)
        .attr("cy", axisHeight)
        .attr("r", 6)
        .attr("fill", "#414141");

      const endCircle = group
        .append("circle")
        .attr("cx", endX)
        .attr("cy", axisHeight)
        .attr("r", 6)
        .attr("fill", "#414141");

      const startTooltip = group
        .append(() => tooltip(`${event.start.getFullYear()}`))
        .attr("x", startX - 40)
        .attr("y", axisHeight - 35)
        .style("opacity", 0)
        .classed("tooltip", true);

      const endTooltip = group
        .append(() => tooltip(`${event.end.getFullYear()}`))
        .attr("x", endX - 40)
        .attr("y", axisHeight - 35)
        .style("opacity", 0)
        .classed("tooltip", true);

      const node = group.node();

      return Object.assign(node, {
        updateScale: ({
          startSpanX = getSpanEventX(i),
          startRealX,
          endSpanX = getSpanEventX(i + 1),
          endRealX,
          transition,
        }: {
          startSpanX?: number;
          startRealX: number;
          endSpanX?: number;
          endRealX: number;
          transition: any;
        }) => {
          path
            .transition(transition)
            .attr(
              "points",
              `${startSpanX},${y2} ${startRealX},${y1} ${endRealX},${y1} ${endSpanX}, ${y2}`
            );

          startCircle.transition(transition).attr("cx", startRealX);
          endCircle.transition(transition).attr("cx", endRealX);
          startTooltip.transition(transition).attr("x", startRealX - 40);
          endTooltip.transition(transition).attr("x", endRealX - 40);
        },
        highlight: (value: boolean) => {
          path
            .transition()
            .attr("fill", value ? "#6667ab" : "transparent")
            .attr("stroke-width", value ? 2 : 1);
          startCircle.transition().attr("r", value ? 8 : 6);
          endCircle.transition().attr("r", value ? 8 : 6);
          startTooltip.transition().style("opacity", value ? 1 : 0);
          endTooltip.transition().style("opacity", value ? 1 : 0);
        },
      });
    })
    .classed("spanEventDateLine", true);

  const domainMid = +domain[0] + (+domain[1] - +domain[0]) / 2;

  const getPointEventY = (event: ProcessedPointEvent) => {
    const eventX = scaleX(event.date);
    let overlappingEvents = 0;
    for (let e of pointEvents) {
      if (e === event) {
        break;
      }
      const eX = scaleX(e.date);
      if (Math.abs(eventX - eX) < pointEventRadius * 2) {
        overlappingEvents++;
      }
    }
    return overlappingEvents * 20;
  };

  let activePointEvent: ProcessedPointEvent | undefined = undefined;
  let isZoomedIn = false;
  svg
    .selectAll(".pointEvent")
    .data(pointEvents)
    .enter()
    .append((d) =>
      pointEventElement(d, {
        alignInfoBox: +d.date > domainMid ? "right" : "left",
        circleRadius: pointEventRadius,
        onImageClick: () => {
          isZoomedIn = true;
          const currentDomain = scaleX.domain();
          const currentDomainMid =
            +currentDomain[0] + (+currentDomain[1] - +currentDomain[0]) / 2;
          const alignment = +d.date > currentDomainMid ? "left" : "right";
          svg
            .transition()
            .duration(1000)
            .attr(
              "viewBox",
              `${scaleX(d.date) - (alignment === "right" ? 55 : 455)} ${
                getPointEventY(d) + 20
              } 500 350`
            );
        },
        onCompressClick: () => {
          isZoomedIn = false;
          svg
            .transition()
            .duration(1000)
            .attr("viewBox", `0 0 ${width} ${height}`);
        },
      })
    )
    .attr(
      "x",
      (d) => scaleX(d.date) - pointEventRadius - (+d.date > domainMid ? 400 : 0)
    )
    .attr("y", (d) => 60 - getPointEventY(d))
    .on("mouseover", function (_, d) {
      if (activePointEvent) {
        return;
      }
      activePointEvent = d;
      d3.selectAll(".pointEvent").sort((a, _) => (a === d ? 1 : -1));

      d3.select(`#circleClipPath_${d.id} circle`)
        .transition(`PointEventInfo_${d.id}`)
        .duration(500)
        .ease(d3.easePolyIn)
        .attr("r", 1000);
    })
    .on("mouseleave", function (_, d) {
      if (isZoomedIn) {
        return;
      }
      if (activePointEvent === d) {
        activePointEvent = undefined;
      }
      d3.select(`#circleClipPath_${d.id} circle`)
        .transition(`PointEventInfo_${d.id}`)
        .duration(500)
        .ease(d3.easePolyOut)
        .attr("r", pointEventRadius);
    });

  return svg.node()!;
}

document.getElementById("app")?.appendChild(createTimeline(mockData));
