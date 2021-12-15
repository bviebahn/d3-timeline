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
