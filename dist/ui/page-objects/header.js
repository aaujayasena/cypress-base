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
import { HeaderDomConstants } from "../constants";
/**
 * Class containing Header component objects.
 */
var Header = /** @class */ (function () {
    function Header() {
    }
    /**
     * Get the data attribute for user avatar.
     * @return {Cypress.Chainable<Element>}
     */
    Header.prototype.getUserAvatar = function () {
        return cy.dataTestId(HeaderDomConstants.AVATAR_ICON_DATA_ATTR);
    };
    /**
     * Get the data attribute for logout button.
     * @return {Cypress.Chainable<Element>}
     */
    Header.prototype.getLogoutButton = function () {
        return cy.dataTestId(HeaderDomConstants.LOGOUT_BUTTON_DATA_ATTR);
    };
    /**
     * Click on the developer portal switch.
     */
    Header.prototype.clickOnDevelopPortalSwitch = function () {
        cy.dataTestId(HeaderDomConstants.DEVELOP_SWITCH_DATA_ATTR).click();
    };
    /**
     * Click on the manage portal switch.
     */
    Header.prototype.clickOnManagePortalSwitch = function () {
        cy.dataTestId(HeaderDomConstants.MANAGE_SWITCH_DATA_ATTR).click();
    };
    return Header;
}());
export { Header };
//# sourceMappingURL=header.js.map