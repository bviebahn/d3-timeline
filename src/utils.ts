export function getMinMaxDates(events: Date[]): [Date, Date] {
  if (!events.length) {
    throw new Error("expected at least 1 date");
  }
  const [firstDate] = events;
  return events.reduce(
    (acc, cur, i) => {
      if (i === 0) {
        return acc;
      }
      return [cur < acc[0] ? cur : acc[0], cur > acc[1] ? cur : acc[1]];
    },
    [firstDate, firstDate]
  );
}

export function getDomainWithPadding(
  start: Date,
  end: Date,
  padding: number
): [Date, Date] {
  if (padding < 0) {
    throw new Error("padding can't be negative");
  }
  const timeSpan = +end - +start;

  if (timeSpan < 0) {
    throw new Error("start should be before end");
  }

  return [
    new Date(+start - timeSpan * padding),
    new Date(+end + timeSpan * padding),
  ];
}

export function splitText(text: string, maxLineLength: number) {
  const words = text.split(" ");
  return words.reduce(
    (acc, cur) => {
      const lastLine = acc[acc.length - 1];
      if (!lastLine.length) {
        acc[acc.length - 1] = cur;
      } else if (lastLine.length + cur.length <= maxLineLength) {
        acc[acc.length - 1] = `${acc[acc.length - 1]} ${cur}`;
      } else {
        acc.push(cur);
      }
      return acc;
    },
    [""]
  );
}