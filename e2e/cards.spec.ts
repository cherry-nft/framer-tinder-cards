import { test, expect, Page } from "@playwright/test";
import type { SwipeType } from "types";

const elements = {
  activeCard: 'div[data-testid="active-card"]',
  likeCount: 'div[data-testid="like-count"]',
  nopeCount: 'div[data-testid="nope-count"]',
  undoBtn: 'button[data-testid="undo-btn"]',
};

const swipeCard = async (
  page: Page,
  swipeType: SwipeType,
  point: { x: number; y: number }
) => {
  const { x, y } = point;
  await page.mouse.move(x, y);
  await page.mouse.click(x, y);
  await page.mouse.down();
  await page.mouse.move(x + (swipeType === "like" ? +1000 : -1000), y);
  await page.mouse.up();
};

test("should have active card & default state", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  await expect(page.locator(elements.activeCard)).toBeVisible();
  await expect(page.locator(elements.undoBtn)).toBeVisible();
  await expect(page.locator(elements.likeCount)).toHaveText("0");
  await expect(page.locator(elements.nopeCount)).toHaveText("0");
});

test("should swipe and change count", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // get the bounding box of active card
  const bb = await page.locator(elements.activeCard).boundingBox();
  // get the center position of active card
  const center = { x: bb!.x + bb!.width / 2, y: bb!.y + bb!.height / 2 };

  await swipeCard(page, "nope", center);
  await expect(page.locator(elements.nopeCount)).toHaveText("1");
  await swipeCard(page, "like", center);
  await expect(page.locator(elements.likeCount)).toHaveText("1");
  await swipeCard(page, "nope", center);
  await expect(page.locator(elements.nopeCount)).toHaveText("2");
  await swipeCard(page, "like", center);
  await expect(page.locator(elements.likeCount)).toHaveText("2");
});

test("should swipe & undo + change count", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // get the bounding box of active card
  const bb = await page.locator(elements.activeCard).boundingBox();
  // get the center position of active card
  const center = { x: bb!.x + bb!.width / 2, y: bb!.y + bb!.height / 2 };

  await swipeCard(page, "nope", center);
  await expect(page.locator(elements.nopeCount)).toHaveText("1");
  await swipeCard(page, "like", center);
  await expect(page.locator(elements.likeCount)).toHaveText("1");
  await swipeCard(page, "nope", center);
  await expect(page.locator(elements.nopeCount)).toHaveText("2");
  await swipeCard(page, "like", center);
  await expect(page.locator(elements.likeCount)).toHaveText("2");

  // Undo
  await page.locator(elements.undoBtn).click();
  await expect(page.locator(elements.likeCount)).toHaveText("1");

  await page.locator(elements.undoBtn).click();
  await expect(page.locator(elements.nopeCount)).toHaveText("1");
});