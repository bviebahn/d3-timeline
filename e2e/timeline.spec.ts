import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Point events", () => {
  test("should display point events", async ({ page }) => {
    await page.waitForSelector(".pointEvent");
    expect(await page.locator(".pointEvent").count()).toEqual(18);
  });
});

test.describe("Span events", () => {
  test("should display span events", async ({ page }) => {
    await page.waitForSelector(".spanEvent");
    expect(await page.locator(".spanEvent").count()).toEqual(4);
  });

  test("should update domain when clicking on span events", async ({
    page,
  }) => {
    await page.waitForSelector(".spanEvent");
    await expect(page.locator(".tick >> text=1900")).toBeVisible();
    await expect(page.locator(".tick >> text=2020")).toBeVisible();

    await page.click(".spanEvent >> nth=1", { position: { x: 100, y: 100 } });

    await page.waitForSelector(".tick >> text=1900", { state: "hidden" });
    await page.waitForSelector(".tick >> text=2020", { state: "hidden" });
    await expect(page.locator(".tick >> text=1928")).toBeVisible();
    await expect(page.locator(".tick >> text=1950")).toBeVisible();

    // reset domain
    await page.click(".spanEvent >> nth=1 >> .compressIcon");
    await page.waitForSelector(".tick >> text=1900");
    await page.waitForSelector(".tick >> text=2020");
  });

  test("should show year tooltips when hovering over span event", async ({
    page,
  }) => {
    await page.waitForSelector(".spanEvent");
    await page
      .locator(".spanEvent >> nth=2")
      .hover({ position: { x: 100, y: 100 } });
    await page.waitForSelector(".tooltip >> text=1945");
    await page.waitForSelector(".tooltip >> text=1990");
  });

  test("should show year tooltip when hovering over connection point", async ({
    page,
  }) => {
    await page.waitForSelector(".dateMarker");
    await page.locator(".dateMarker:nth-child(14) circle").hover();
    await page.waitForSelector(".tooltip >> text=1945");
  });
});
