import * as d3 from "d3";
import { ProcessedSpanEvent } from "../types";
import { splitText } from "../utils";
import compressIcon from "./compressIcon";

function spanEventElement(
  event: ProcessedSpanEvent,
  { onCompress }: { onCompress: () => void }
) {
  const eventElement = d3.create("svg");

  eventElement
    .append("image")
    .attr("width", "100%")
    .attr("height", "80%")
    .attr("preserveAspectRatio", "xMinYMid slice")
    .attr("href", event.image);

  const contentElement = eventElement
    .append("svg")
    .classed("content", true)
    .attr("y", "80%")
    .attr("width", "100%")
    .attr("height", "20%");

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
    .append(compressIcon)
    .attr("x", 475)
    .attr("y", 10)
    .attr("width", 16)
    .attr("height", 16)
    .attr("fill", "#FFF")
    .style("cursor", "pointer")
    .on("click", function (e) {
      e.stopPropagation();
      onCompress();
    });

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
    .attr("width", 500)
    .attr("height", "100%")
    .attr("fill", "url(#grayTransparentGradient)")
    .attr("pointer-events", "none");

  eventElement
    .append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "transparent")
    .attr("stroke", "#000")
    .attr("stroke-width", 1)
    .attr("pointer-events", "none");

  return eventElement.node();
}

export default spanEventElement;
