// LoginPage.ts
import { Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;

    // Локаторы элементов страницы
    private loginButton = 'button.Header__login-button--2MyAC';
    private usernameField = '#username';
    private passwordField = '#password';
    private submitButton = 'button.ant-btn.AuthForm__login-form-button--2k6Lv';
    private userNameElement = 'a.Header__header-user-name--2Ao3D';
    private errorModal = '.ant-modal-confirm-body';
    private errorMessage = '.ant-modal-confirm-body .ant-result-subtitle';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
        await this.page.click(this.loginButton);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.submitButton);
    }

    async waitForUserNameElement() {
        return await this.page.waitForSelector(this.userNameElement);
    }

    async waitForUserNameText(expectedText: string) {
        await expect(this.page.locator(this.userNameElement)).toHaveText(expectedText, { timeout: 5000 });
    }

    async getUserNameText() {
        return await this.page.textContent(this.userNameElement);
    }

    async waitForErrorModalVisible() {
        return await this.page.waitForSelector(this.errorModal, { state: 'visible' });
    }

    async getErrorMessageText() {
        return await this.page.textContent(this.errorMessage);
    }
}
