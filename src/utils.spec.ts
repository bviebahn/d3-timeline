import { getMinMaxDates, getDomainWithPadding, splitText } from "./utils";

describe("getMinMaxDates", () => {
  test("should return correct min and max dates", () => {
    expect(
      getMinMaxDates([
        new Date("1900"),
        new Date("1901"),
        new Date("1902"),
        new Date("1899"),
      ])
    ).toEqual([new Date("1899"), new Date("1902")]);

    expect(
      getMinMaxDates([
        new Date("01-05-2022"),
        new Date("01-04-2022"),
        new Date("01-09-2022"),
        new Date("01-07-2022"),
        new Date("01-03-2022"),
      ])
    ).toEqual([new Date("01-03-2022"), new Date("01-09-2022")]);
  });

  test("should return same date as min and max date if passed a single element", () => {
    expect(getMinMaxDates([new Date("2022")])).toEqual([
      new Date("2022"),
      new Date("2022"),
    ]);
  });

  test("should throw Error if passed empty array", () => {
    expect(() => getMinMaxDates([])).toThrow();
  });
});

describe("getDomainWithPadding", () => {
  test("should return input domain if passed 0 padding", () => {
    expect(getDomainWithPadding(new Date("2020"), new Date("2022"), 0)).toEqual(
      [new Date("2020"), new Date("2022")]
    );
  });

  test("should return correct domain with padding", () => {
    expect(
      getDomainWithPadding(new Date("2002"), new Date("2022"), 0.1)
    ).toEqual([
      new Date("2000-01-01T12:00:00.000Z"),
      new Date("2024-01-01T12:00:00.000Z"),
    ]);
    expect(
      getDomainWithPadding(new Date("2020"), new Date("2022"), 0.5)
    ).toEqual([
      new Date("2018-12-31T12:00:00.000Z"),
      new Date("2023-01-01T12:00:00.000Z"),
    ]);
    expect(
      getDomainWithPadding(new Date("1990"), new Date("2022"), 0.9)
    ).toEqual([
      new Date("1961-03-14T19:12:00.000Z"),
      new Date("2050-10-20T04:48:00.000Z"),
    ]);
    expect(getDomainWithPadding(new Date("1930"), new Date("2032"), 2)).toEqual(
      [
        new Date("1725-12-31T00:00:00.000Z"),
        new Date("2236-01-02T00:00:00.000Z"),
      ]
    );
  });

  test("should throw Error if padding is negative", () => {
    expect(() =>
      getDomainWithPadding(new Date("2002"), new Date("2022"), -0.1)
    ).toThrow();
  });
});

describe("splitText", () => {
  test("should split text correctly", () => {
    expect(
      splitText(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        10
      )
    ).toMatchSnapshot();
    expect(
      splitText(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        4
      )
    ).toMatchSnapshot();
    expect(
      splitText(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        50
      )
    ).toMatchSnapshot();
    expect(
      splitText(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        10000
      )
    ).toMatchSnapshot();
  });
});
