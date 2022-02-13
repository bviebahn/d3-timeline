import * as d3 from "d3";

import { ProcessedPointEvent } from "../types";
import { splitText } from "../utils";
import compressIcon from "./compressIcon";

export function pointEventContent({
  topicColors,
  onImageClick,
  onCompressClick,
}: {
  topicColors: Record<string, string>
  onImageClick: () => void;
  onCompressClick: () => void;
}) {
  const width = 400;
  const maxHeight = 650;
  const imageHeight = 300;
  const headerHeight = 30;
  const backgroundColor = "#111";

  const eventElement = d3
    .create("svg")
    .classed("pointEventContent", true)
    .attr("y", 50);

  const defs = eventElement.append("defs");

  defs
    .append("svg:filter")
    .attr("id", "point_event_blur")
    .append("feGaussianBlur")
    .attr("y", headerHeight - 1)
    .attr("in", "SourceGraphic")
    .attr("stdDeviation", 4);

  const topicHeader = eventElement
    .append("rect")
    .attr("width", width)
    .attr("height", headerHeight);

  const compressButton = eventElement
    .append(compressIcon)
    .attr("x", width - 24)
    .attr("y", 6)
    .attr("width", 16)
    .attr("height", 16)
    .on("click", function () {
      onCompressClick();
    })
    .style("cursor", "pointer")
    .attr("fill", "#FFF");

  eventElement
    .append("rect")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", "100%")
    .attr("fill", backgroundColor);

  const headerText = eventElement
    .append("text")
    .attr("x", 20)
    .attr("y", 20)
    .attr("fill", backgroundColor)
    .attr("font-size", 16);

  const blurImage = eventElement
    .append("image")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", imageHeight)
    .attr("preserveAspectRatio", "xMidYMid slice")
    .style("cursor", "pointer")
    .style("opacity", 0.4)
    .on("click", function () {
      compressButton.transition().attr("opacity", 1);
      onImageClick();
    });

  const image = eventElement
    .append("image")
    .attr("y", headerHeight - 1)
    .attr("width", width)
    .attr("height", imageHeight)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("cursor", "pointer")
    .on("click", function () {
      compressButton.transition().attr("opacity", 1);
      onImageClick();
    });

  return Object.assign(eventElement.node(), {
    setEvent: (event: ProcessedPointEvent) => {
      topicHeader.transition().attr("fill", topicColors[event.topic]);
      headerText.text(event.topic);
      blurImage
        .attr("href", event.image)
        .attr("filter", "url(#point_event_blur)");
      image.attr("href", event.image);

      const titleLines = splitText(event.title, 40);
      const textLines = splitText(event.text, 52);

      const height =
        headerHeight +
        imageHeight +
        titleLines.length * 20 +
        textLines.length * 16 +
        30;

      eventElement.attr("height", Math.min(height, maxHeight));

      eventElement.selectAll(".titleLine, .textLine").remove();

      eventElement
        .selectAll(".titleLine")
        .data(titleLines)
        .enter()
        .append("text")
        .classed("titleLine", true)
        .attr("x", 10)
        .attr("y", (_, i) => imageHeight + 50 + i * 20)
        .text((d) => d)
        .attr("fill", "#ccc")
        .style("font-size", "16px")
        .style("font-weight", "bold");

      eventElement
        .selectAll(".textLine")
        .data(textLines)
        .enter()
        .append("text")
        .classed("textLine", true)
        .attr("x", 10)
        .attr("y", (_, i) => imageHeight + 50 + titleLines.length * 20 + i * 16)
        .text((d) => d)
        .attr("fill", "#ccc")
        .style("font-size", "12px");
    },
  });
}
