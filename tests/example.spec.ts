import { test, expect } from '@playwright/test';
import { DataLandingPage } from '../pages/CheckoutPage';

test.beforeEach('Go to Landing Page', async ({ page }) => {
  const landingPage = new DataLandingPage(page);
  await landingPage.navigateToLandingPage();
});

test.afterEach('Close Browser', async ({ page }) => {
  await page.close();
});

test ('Add to Cart', async ({ page }) => {
  const landingPage = new DataLandingPage(page);
  await landingPage.AddToCart('085775648550');
});
