import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/waiters');
});

test('verify that "Waiters" page has correct title', async ({ page }) => {
  const pageTitle = 'Waiters List'
  const heading = page.getByRole('heading', { name: pageTitle })

  await expect(heading).toBeVisible();
  await expect(heading).toContainText(pageTitle);
});


test('should display table with waiters', async ({ page }) => {
  const MOCKED_WAITERS = [
    {
      "id": 1,
      "firstName": "Dino",
      "phone": "415-18-53"
    },
    {
      "id": 2,
      "firstName": "Jakayla",
      "phone": "196-26-69"
    },
    {
      "id": 3,
      "firstName": "Axel",
      "phone": "877-99-83"
    },
    {
      "id": 4,
      "firstName": "Willis",
      "phone": "376-55-65"
    },
    {
      "id": 5,
      "firstName": "Merl",
      "phone": "286-76-83"
    }
  ]

  await page.route('*/**/waiters/', async route => {
    await route.fulfill({ json: MOCKED_WAITERS });
  });

  const rows = page.locator('tbody > tr')

  await expect(rows).toHaveCount(5);
});