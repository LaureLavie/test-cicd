const {test,expect}=require('@playwright/test')

test("Tester la connexion", async ({page}) => {
  await page.goto('http://localhost:3000');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button',{name:'Login'}).click();
const message=page.locator('#message');
  await expect(message).toHaveText('Entre donc, ô noble inconnu, la chopine est servie !');
});
