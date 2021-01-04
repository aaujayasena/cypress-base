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
import { CookieUtils } from "./cookie-utils";
import { StorageUtils } from "./storage-utils";
/**
 * Class containing housekeeping related utils.
 */
var HousekeepingUtils = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    function HousekeepingUtils() {
    }
    /**
     * Reusable function to perform usual cleanup tasks.
     */
    HousekeepingUtils.performCleanUpTasks = function () {
        CookieUtils.clearAllCookies();
        StorageUtils.clearLocalStorage();
    };
    return HousekeepingUtils;
}());
export { HousekeepingUtils };
//# sourceMappingURL=housekeeping-utils.js.map