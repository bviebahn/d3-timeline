import * as d3 from "d3";

function roundedRectangle({
  x,
  y,
  width,
  height,
  cornerRadius,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  cornerRadius: number;
}) {
  return d3
    .create("svg:path")
    .attr(
      "d",
      `M${x},${y} h${width} a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${cornerRadius} v${height} a${cornerRadius},${cornerRadius} 0 0 1 ${-cornerRadius},${cornerRadius} h${-width} a${cornerRadius},${cornerRadius} 0 0 1 ${-cornerRadius},${-cornerRadius} v${-height} a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${-cornerRadius} z`
    )
    .node();
}

export default roundedRectangle;
