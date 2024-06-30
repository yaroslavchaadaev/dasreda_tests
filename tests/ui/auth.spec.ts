// @ts-check
import { test, expect } from '@playwright/test';
import config from "../../framework/helpers/config";
import randomString from "../../framework/helpers/fixtures";
import {LoginPage} from "../../framework/ui/pages/LoginPage";

const username: string | undefined = config.auth.credentials.username;
const password: string | undefined = config.auth.credentials.password;
const expectedUserName = 'СредаЧетверг ДаДа ';

if (!username || !password) {
  throw new Error('Username или password не определены в файле .env');
}

test('Успешная авторизация', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(username, password);
  await loginPage.waitForUserNameElement();
  await loginPage.waitForUserNameText(expectedUserName);

  const actualUserName = await loginPage.getUserNameText();
  expect(actualUserName).toBe(expectedUserName);
});

test('Отображается соответствующая ошибка при вводе неверного пароля', async ({ page }) => {
  const loginPage = new LoginPage(page); // Создание экземпляра LoginPage с передачей page
  await loginPage.navigateToLoginPage();
  await loginPage.login(username, randomString.alpha());
  const errorModal = await loginPage.waitForErrorModalVisible();
  expect(errorModal).not.toBeNull();
  const errorMessage = await loginPage.getErrorMessageText();
  expect(errorMessage).toContain('Неправильный логин или пароль');
});
