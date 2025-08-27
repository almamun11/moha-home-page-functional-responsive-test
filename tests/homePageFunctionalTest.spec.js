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

  //police clearance

  await page.getByRole('heading', { name: 'Police Clearance (Spain)' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Police Clearance (Spain)' }).click();
  const guidelineLink2 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink2).toBeVisible();
  await guidelineLink2.click();
  const href2 = await guidelineLink2.getAttribute('href');
  expect(href2).not.toBeNull();
  expect(href2).not.toBe('');

    //Bangladesh Citizenship

  await page.getByRole('heading', { name: 'Bangladesh Citizenship' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Bangladesh Citizenship' }).click();
  const guidelineLink3 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink3).toBeVisible();
  await guidelineLink3.click();
  const href3 = await guidelineLink3.getAttribute('href');
  expect(href3).not.toBeNull();
  expect(href3).not.toBe('');

    //Foreigner Security Clearance

  await page.getByRole('heading', { name: 'Foreigner Security Clearance' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Foreigner Security Clearance' }).click();
  const guidelineLink4 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink4).toBeVisible();
  await guidelineLink4.click();
  const href4 = await guidelineLink4.getAttribute('href');
  expect(href4).not.toBeNull();
  expect(href4).not.toBe('');

    //Security Clearance for Govt. Job

  await page.getByRole('heading', { name: 'Security Clearance for Govt. Job' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('heading', { name: 'Security Clearance for Govt. Job' }).click();
  const guidelineLink5 = page.getByRole('link', { name: ' Download Guideline' }).first();
  await expect(guidelineLink5).toBeVisible();
  await guidelineLink5.click();
  const href5 = await guidelineLink5.getAttribute('href');
  expect(href5).not.toBeNull();
  expect(href5).not.toBe('');

  //Important Link
  await page.getByRole('heading', { name: 'Important Links' }).click();
  await page.getByRole('link', { name: 'Ministry of Home Affairs' }).click();
  await page.getByRole('link', { name: 'Bangladesh Investment Development Authority' }).click();
  await page.getByRole('link', { name: 'Bangladesh Economic Zones Authority' }).click();
  await page.getByRole('link', { name: 'Bangladesh Export Processing Zones Authority' }).click();
  await page.getByRole('link', { name: 'Bangladesh Hi-Tech Park Authority' }).click();

// Others
  await page.getByRole('heading', { name: 'Others' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await expect(page.locator('body')).toContainText('Privacy Policy');
  await page.getByRole('link', { name: 'Terms of Condition' }).click();
  await expect(page.locator('body')).toContainText('Terms of Condition');

  // At a Glance
  await page.getByRole('link', { name: 'At a Glance' }).click();
  await expect(page.locator('body')).toContainText('About Security Services Division');
  await expect(page.locator('body')).toContainText('Our Vision & Mission');
  await expect(page.locator('body')).toContainText('Our Journey');
  await expect(page.locator('body')).toContainText('Our Commitment to Citizens');

   // FAQ
  await page.getByRole('link', { name: 'FAQ' }).click();
  await expect(page.locator('body')).toContainText('Frequently Asked Questions');

  // Help
  await page.getByRole('link', { name: 'Help' }).click();

     // Notice
  await page.getByRole('link', { name: 'Notice' }).click();
  await expect(page.locator('body')).toContainText('Stay updated with the latest announcements and important information');

  // Administrative Login
  await page.getByRole('link', { name: 'Administrative Login' }).click();
  await expect(page.locator('body')).toContainText('User Access');
  await page.getByRole('textbox', { name: 'User Email' }).click();
  await page.getByRole('textbox', { name: 'User Email' }).fill('sysadmin1@batworld.com');
  await page.getByRole('textbox', { name: 'User Password' }).click();
  await page.getByRole('textbox', { name: 'User Password' }).fill('123456a@');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Logged in successfully,').click();
});