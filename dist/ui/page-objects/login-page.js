/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
/// <reference types="cypress" />
import { Header } from "./header";
import { LoginPageDomConstants } from "../constants";
/**
 * Class containing Login Page objects.
 */
var LoginPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function LoginPage() {
        this.header = new Header();
    }
    /**
     * Get the data attribute for login page user input field.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    LoginPage.prototype.getLoginUsernameInputField = function () {
        return cy.get(LoginPageDomConstants.USERNAME_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the data attribute for login page password input field.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    LoginPage.prototype.getLoginPasswordInputField = function () {
        return cy.get(LoginPageDomConstants.PASSWORD_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the data attribute for login page form submit button.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    LoginPage.prototype.getLoginFormSubmitButton = function () {
        return cy.contains(LoginPageDomConstants.CONTINUE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Click on the Logout button on the header component.
     */
    LoginPage.prototype.clickOnLogoutButton = function () {
        this.header.getUserAvatar().click();
        this.header.getLogoutButton().click();
    };
    ;
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login-page.js.map