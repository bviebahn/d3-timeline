import * as d3 from "d3";
import roundedRectangle from "./roundedRectangle";

function tooltip(text: string) {
  const tooltip = d3.create("svg").classed("tooltip", true);

  tooltip
    .append(() =>
      roundedRectangle({
        x: 20,
        y: 0,
        width: text.length * 10,
        height: 2,
        cornerRadius: 10,
      })
    )
    .attr("fill", "#000000CC");

  tooltip
    .append("text")
    .text(text)
    .attr("x", 21)
    .attr("y", 16.5)
    .attr("fill", "#FFF");

  return tooltip.node();
}

export default tooltip;
