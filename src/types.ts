export type BaseEvent = {
  id: string;
  title: string;
  text: string;
  image: string;
};

export type SpanEvent = BaseEvent & {
  start: string;
  end: string | undefined;
};

export type PointEvent = BaseEvent & {
  date: string;
  topic: "Ort" | "Produktion" | "Menschen";
};

export type ProcessedSpanEvent = Omit<
  SpanEvent,
  "start" | "end"
> & {
  start: Date;
  end: Date;
};

export type ProcessedPointEvent = Omit<PointEvent, "date"> & {
  date: Date;
};
