import { expect, test } from "@playwright/test";

test.describe("docs interactions", () => {
  test("hero and encounter controls respond to clicks", async ({ page, isMobile }) => {
    await page.goto("/");
    await expect(page.locator("#hero")).toBeVisible();

    if (isMobile) {
      await page.getByLabel("Open navigation").click();
      await expect(page.getByLabel("Mobile navigation")).toBeVisible();
      await page.locator('[data-slot="sheet-content"] a[href="/#worlds"]').click();
      await expect(page).toHaveURL(/#worlds/);
    } else {
      await page.locator('#hero a[href="#worlds"]').click();
      await expect(page).toHaveURL(/#worlds/);
      await page.locator('header a[href="/#start"]').click();
      await expect(page).toHaveURL(/#start/);
    }

    await page.locator("#connections").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "On campus" }).click();
    await expect(page.getByRole("button", { name: "On campus" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.locator("#connections h3")).toContainText("The same campus");
  });

  test("homepage hierarchy, legal drafts, and orientation chrome", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#hero")).toBeVisible();
    await expect(page.locator("#idea")).toBeVisible();
    await expect(page.locator("#connections")).toBeVisible();
    await expect(page.locator("#worlds")).toBeVisible();
    await expect(page.locator("#trust")).toBeVisible();
    await expect(page.locator("#start")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.locator("[aria-hidden='true'].fixed")).toBeVisible();

    await page.locator("#go").scrollIntoViewIfNeeded();
    await page
      .getByRole("button", { name: /CircleCross Go/i })
      .first()
      .click();
    await expect(page.getByText("Explore CircleCross Go")).toBeVisible();
    await expect(page.getByRole("link", { name: /Explore CircleCross Go/i })).toHaveAttribute(
      "href",
      "/go",
    );
    await expect(page.getByText("For example:")).toHaveCount(3);

    await page.goto("/privacy");
    await expect(page.getByRole("status")).toContainText("Draft for legal review");
    await expect(page.getByRole("contentinfo")).toBeVisible();

    await page.goto("/terms");
    await expect(page.getByRole("status")).toContainText("Draft for legal review");
    await expect(page.getByRole("heading", { name: "Using this site." })).toBeVisible();
  });

  test("start world rows save on one tap", async ({ page }) => {
    await page.goto("/");
    await page.locator("#start").scrollIntoViewIfNeeded();

    const uni = page.getByRole("radio", { name: /CircleCross Uni/i });
    await expect(uni).toBeVisible();
    await uni.click();
    await expect(uni).toBeChecked();
    await expect(page.locator("#start [role='status']")).toContainText(
      "Your Uni preference is saved",
    );

    await page.reload();
    await page.locator("#start").scrollIntoViewIfNeeded();
    await expect(page.getByRole("radio", { name: /CircleCross Uni/i })).toBeChecked();
    await expect(page.locator("#start [role='status']")).toContainText(
      "Your Uni preference is saved",
    );

    await expect(page.locator("#start [role='listbox']")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /Choose CircleCross/i })).toHaveCount(0);
  });
});
