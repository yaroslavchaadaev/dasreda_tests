"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
// LoginPage.ts
const test_1 = require("@playwright/test");
class LoginPage {
    constructor(page) {
        // Локаторы элементов страницы
        this.loginButton = 'button.Header__login-button--2MyAC';
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.submitButton = 'button.ant-btn.AuthForm__login-form-button--2k6Lv';
        this.userNameElement = 'a.Header__header-user-name--2Ao3D';
        this.errorModal = '.ant-modal-confirm-body';
        this.errorMessage = '.ant-modal-confirm-body .ant-result-subtitle';
        this.page = page;
    }
    navigateToLoginPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('/');
            yield this.page.click(this.loginButton);
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.usernameField, username);
            yield this.page.fill(this.passwordField, password);
            yield this.page.click(this.submitButton);
        });
    }
    waitForUserNameElement() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.waitForSelector(this.userNameElement);
        });
    }
    waitForUserNameText(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, test_1.expect)(this.page.locator(this.userNameElement)).toHaveText(expectedText, { timeout: 5000 });
        });
    }
    getUserNameText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.textContent(this.userNameElement);
        });
    }
    waitForErrorModalVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.waitForSelector(this.errorModal, { state: 'visible' });
        });
    }
    getErrorMessageText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.textContent(this.errorMessage);
        });
    }
}
exports.LoginPage = LoginPage;
