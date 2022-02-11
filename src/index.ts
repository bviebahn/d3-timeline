import data, { testData } from "./data";
import createTimeline from "./timeline";

document
  .getElementById("app")
  ?.appendChild(
    createTimeline(
      location.pathname === "/d3-timeline/generated-timeline" ? testData : data
    )
  );
