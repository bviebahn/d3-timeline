import * as d3 from "d3";

import { ProcessedPointEvent } from "../types";
import { splitText } from "../utils";
import compressIcon from "./compressIcon";

const TOPIC_COLORS = {
  Menschen: "#FF5F00",
  Ort: "#76B900",
  Produktion: "#0082D1",
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
    onImageClick,
    onCompressClick,
  }: {
    alignInfoBox: "left" | "right";
    circleRadius: number;
    onImageClick: () => void;
    onCompressClick: () => void;
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
    .attr("y", 50)
    .attr("height", Math.min(height, maxHeight));
  const clipPathId = `circleClipPath_${event.id}`;

  const defs = eventElement.append("defs");

  defs
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

  defs
    .append("svg:filter")
    .attr("id", `blur_${event.id}`)
    .append("feGaussianBlur")
    .attr("y", headerHeight - 1)
    .attr("in", "SourceGraphic")
    .attr("stdDeviation", 4);

  const clipGroup = eventElement
    .append("svg:g")
    .attr("clip-path", `url(#${clipPathId})`);

  clipGroup
    .append("rect")
    .attr("width", width)
    .attr("height", headerHeight)
    .attr("fill", TOPIC_COLORS[event.topic]);

  const compressButton = clipGroup
    .append(compressIcon)
    .attr("x", width - 24)
    .attr("y", 6)
    .attr("width", 16)
    .attr("height", 16)
    .on("click", function () {
      d3.select(this).transition().attr("opacity", 0);
      onCompressClick();
    })
    .style("cursor", "pointer")
    .attr("fill", "#FFF")
    .attr("opacity", 0);

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
    .style("cursor", "pointer")
    .style("opacity", 0.4)
    .attr("filter", `url(#blur_${event.id})`)
    .on("click", function () {
      compressButton.transition().attr("opacity", 1);
      onImageClick();
    });

  clipGroup
    .append("image")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", imageHeight)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("href", event.image)
    .style("cursor", "pointer")
    .on("click", function () {
      compressButton.transition().attr("opacity", 1);
      onImageClick();
    });

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
