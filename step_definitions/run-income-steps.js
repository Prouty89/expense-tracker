import { ok } from 'assert';
import { Given, When, Then } from 'cucumber';

Given('I navigate to the login form', async () => {
  await browser.url(`https://expense-tracker-4dk85uooq.now.sh/`)
  element.click()
  expect(browser).toHaveUrl('https://expense-tracker-4dk85uooq.now.sh/')
});
​
When('I fill out the form', async () => {
  const pageTitle = $('h1=sign in')
  ok(pageTitle)
  const emailInput = await $('[name="email"]') 
  emailInput.setValue('foo@foo.com')
  const passwordInput = await $('[name="password"')
  passwordInput.setValue('secret')
  const submitButton = await $('button=Submit')
  await submitButton.click()
})
​
Then('I should see a list of things', () => {
  const pageTitle = $('h1=You\'re logged in')
  const h2 = $('h2=List of things')
  expect(pageTitle).toBeDisplayed()
  ok(pageTitle)
  ok(h2)
});