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
import { ServerConstants } from "../constants";
/**
 * Class containing cookie related utils.
 */
var CookieUtils = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    function CookieUtils() {
        Cypress.Cookies.debug(CookieUtils.debug);
    }
    /**
     * Preserves all session related cookies.
     */
    CookieUtils.preserveAllSessionCookies = function () {
        for (var _i = 0, _a = ServerConstants.SESSION_COOKIES; _i < _a.length; _i++) {
            var cookie = _a[_i];
            Cypress.Cookies.preserveOnce(cookie);
        }
    };
    /**
     * Removes all the cookies.
     */
    CookieUtils.clearAllCookies = function () {
        cy.clearCookies();
    };
    CookieUtils.debug = true;
    return CookieUtils;
}());
export { CookieUtils };
//# sourceMappingURL=cookie-utils.js.map