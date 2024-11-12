/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const isHttpUrl = (link) => {
    if (!link) {
        return false;
    }
    let url;
    try {
        url = new URL(link);
    }
    catch (e) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
};
export const isSvgDataUrl = (url) => {
    if (!url) {
        return false;
    }
    if (typeof url !== 'string') {
        return false;
    }
    return url.startsWith('data:image/svg+xml');
};
//# sourceMappingURL=condition-checks.js.map
