import { test, expect } from '@playwright/test';

test('Home page should contain search field', async ({ page }) => {
  await page.goto('https://www.plus.fifa.com/en/');

  const searchInput =  page.locator('nav input[data-id*="searchbox-input"]');

  await expect(searchInput).toBeVisible();
  await expect(searchInput).toHaveAttribute('placeholder', 'Search');
});


test('Home page should contain sign in button', async ({ page }) => {
  await page.goto('https://www.plus.fifa.com/en/');

  const signInButton = page.getByTestId('auth-right-header-button')

  await expect(signInButton).toBeVisible();
  expect(await signInButton.innerText()).toEqual("SIGN IN");
});


test('Verify language toggle has correct options', async ({ page }) => {
  const expectedLangs = [
    "ENGLISH",
    "ESPAÑOL",
    "ITALIANO",
    "DEUTSCH",
    "FRANÇAIS",
    "PORTUGUÊS",
  ];

  await page.goto('https://www.plus.fifa.com/en/');

  const langLinks = page.locator('nav a[data-id*="dropDownMenu__item-lang-button"]');

  await expect(langLinks).toHaveCount(expectedLangs.length);
  expect(await langLinks.allInnerTexts()).toEqual(expectedLangs);
});