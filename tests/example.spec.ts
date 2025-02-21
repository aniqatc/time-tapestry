import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/timetapestry/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading with the "Notable Events"
  await expect(page.getByRole('heading', { name: 'Notable Events' })).toBeVisible();
});
