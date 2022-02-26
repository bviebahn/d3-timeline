import data, { testData } from "./data";
import createTimeline from "./timeline";

document.getElementById("app")?.appendChild(createTimeline(data));
