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
/**
 * Class containing common utils.
 */
var CommonUtils = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    function CommonUtils() {
    }
    /**
     * Resolves the data test id when a raw attribute value is passed in.
     * @example CommonUtils.resolveDataTestId("sample-id") -> [data-testid="sample-id"]
     *
     * @param {string} value - Attribute value.
     * @returns {string}
     */
    CommonUtils.resolveDataTestId = function (value) {
        return "[data-testid=" + value + "]";
    };
    return CommonUtils;
}());
export { CommonUtils };
//# sourceMappingURL=common-utils.js.map