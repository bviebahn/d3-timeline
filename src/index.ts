import data, { testData as _ } from "./data";
import createTimeline from "./timeline";

document.getElementById("app")?.appendChild(createTimeline(data));
