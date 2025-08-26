import { test, expect } from '@playwright/test';

test('Home Page Functionality Test', async ({ page }) => {
  test.setTimeout(90000); // Increase test timeout to 90 seconds
  await page.goto('https://uat-moha.oss.net.bd/', { timeout: 60000 });
  await expect(page.locator('body')).toContainText('Online Security Clearance System');
  //Dual Citizenship 
  await page.getByRole('heading', { name: 'Dual Citizenship' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Dual Citizenship' }).click();
  const guidelineLink1 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink1).toBeVisible();
  await guidelineLink1.click();
  // Optionally, check if the link has a valid href attribute
  const href1 = await guidelineLink1.getAttribute('href');
  expect(href1).not.toBeNull();
  expect(href1).not.toBe('');

  // ...existing code...

  await page.getByRole('heading', { name: 'Police Clearance (Spain)' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Police Clearance (Spain)' }).click();
  const guidelineLink2 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink2).toBeVisible();
  await guidelineLink2.click();
  const href2 = await guidelineLink2.getAttribute('href');
  expect(href2).not.toBeNull();
  expect(href2).not.toBe('');
});