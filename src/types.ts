export type BaseEvent = {
  title: string;
  text: string;
  image: string;
};

export type SpanEvent = BaseEvent & {
  start: string;
  end?: string;
};

export type PointEvent<T extends string> = BaseEvent & {
  date: string;
  topic: T;
};

export type ProcessedSpanEvent = Omit<SpanEvent, "start" | "end"> & {
  start: Date;
  end: Date;
};

export type ProcessedPointEvent<T extends string = string> = Omit<PointEvent<T>, "date"> & {
  date: Date;
  yLevel: number;
};

export type TimelineInput<T extends string = string> = {
  title: string;
  topicColors: Record<T, string>
  events: (SpanEvent | PointEvent<T>)[];
};
