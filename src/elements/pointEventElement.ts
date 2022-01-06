import * as d3 from "d3";

import { ProcessedPointEvent } from "../types";
import { splitText } from "../utils";

const TOPIC_COLORS = {
  Menschen: "#f94144",
  Ort: "#38b000",
  Produktion: "#3a86ff",
};

function getPointEventY(topic: string) {
  return topic === "Menschen"
    ? 30
    : topic === "Ort"
    ? 50
    : 70;
}

function pointEventElement(
  event: ProcessedPointEvent,
  {
    alignInfoBox,
    circleRadius,
  }: {
    alignInfoBox: "left" | "right";
    circleRadius: number;
  }
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
    .attr("y", getPointEventY(event.topic))
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
        ? circleRadius
        : width - circleRadius
    )
    .attr("cy", circleRadius)
    .attr("r", circleRadius);

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

export default pointEventElement;