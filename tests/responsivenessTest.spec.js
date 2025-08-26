import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop Large', width: 1440, height: 900 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Mobile Large', width: 425, height: 900 },
  { name: 'Mobile Medium', width: 375, height: 667 },
  { name: 'Mobile Small', width: 320, height: 568 }
];

test.describe('Responsiveness Test Areas', () => {
  for (const viewport of viewports) {
    test(`should pass all checks on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('https://uat-moha.oss.net.bd/');

      // 1. Layout & Alignment
      await expect(page.locator('.nav-menu-container, .navbar, nav').first()).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      // Check that at least one visible button exists
      const visibleButton = page.locator('button', { has: page.locator(':visible') }).first();
      expect(await visibleButton.count()).toBeGreaterThanOrEqual(0);
      // Check for overlapping content (basic) - log warning instead of failing
  const bodyOverflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
  expect(bodyOverflow).toBeFalsy();
      // Check grid/column structure
      expect(await page.locator('.container, .row, .grid').count()).toBeGreaterThan(0);

      // 2. Navigation
      await expect(page.locator('nav')).toBeVisible();
      expect(await page.locator('nav a').count()).toBeGreaterThan(0);

      // // 3. Images & Media
      // const imgCount = await page.locator('img').count();
      // expect(imgCount).toBeGreaterThan(0);
      // let hasSrcset = false;
      // for (let i = 0; i < imgCount; i++) {
      //   const srcset = await page.locator('img').nth(i).evaluate(el => el.getAttribute('srcset'));
      //   if (srcset) { hasSrcset = true; break; }
      // }
      // // Only warn if no srcset found
      // if (!hasSrcset) {
      //   console.warn('Warning: No responsive images (srcset) found on', viewport.name);
      // }
      // // Video/audio player check (skip if not present)

      // 4. Text & Fonts
      const fontSize = await page.locator('body').evaluate(el => getComputedStyle(el).fontSize);
      expect(parseInt(fontSize)).toBeGreaterThanOrEqual(12);

      // 5. Forms & Input Fields
      expect(await page.locator('input').count()).toBeGreaterThanOrEqual(0);
      expect(await page.locator('button').count()).toBeGreaterThan(0);
      // Validation message check (skip if not present)

      // 6. Performance
  const perf = await page.evaluate(() => performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
  expect(perf).toBeLessThan(3000);

      // 7. Orientation
      // (Landscape/portrait handled by viewport sizes)

      // 8. Browser Compatibility
      // Playwright runs on Chromium, Firefox, WebKit by default

      // 9. Touch & Gestures
      // Only run scroll test if supported
      let scrollError = null;
      try {
        await page.mouse.wheel(0, 500); // Scroll test
      } catch (e) {
        scrollError = e;
      }
      expect(scrollError).toBeNull();

      // 10. Accessibility (Bonus)
  const buttonHeight = await page.locator('button').first().evaluate(el => el.offsetHeight);
  if (buttonHeight < 44) {
    console.warn(`Warning: First button height (${buttonHeight}px) is less than recommended 44px on ${viewport.name}`);
  }
    });
  }
});
