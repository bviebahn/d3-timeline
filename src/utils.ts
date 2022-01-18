export function getMinMaxDates(
  events: Date[]
): [Date, Date] {
  const [firstDate] = events;
  return events.reduce(
    (acc, cur, i) => {
      if (i === 0) {
        return acc;
      }
      return [
        cur < acc[0] ? cur : acc[0],
        cur > acc[1] ? cur : acc[1],
      ];
    },
    [firstDate, firstDate]
  );
}

export function getDomainWithPadding(
  start: Date,
  end: Date,
  padding: number
): [Date, Date] {
  const timeSpan = +end - +start;
  return [
    new Date(+start - timeSpan * padding),
    new Date(+end + timeSpan * padding),
  ];
}

export function splitText(
  text: string,
  maxLineLength: number
) {
  const words = text.split(" ");
  return words.reduce(
    (acc, cur) => {
      const lastLine = acc[acc.length - 1];
      if (lastLine.length + cur.length <= maxLineLength) {
        acc[acc.length - 1] = `${
          acc[acc.length - 1]
        } ${cur}`;
      } else {
        acc.push(cur);
      }
      return acc;
    },
    [""]
  );
}

export function unique<T extends any[]>(arr: T) {
  return arr.filter((e, i) => arr.indexOf(e) === i);
}
