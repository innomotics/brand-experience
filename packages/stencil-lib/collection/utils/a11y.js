/*
 * SPDX-FileCopyrightText: 2024 Innomotics GmbH
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { isHttpUrl, isSvgDataUrl } from "./condition-checks";
export const a11yBoolean = (value) => (value ? 'true' : 'false');
const kebabCaseToUpperCaseSentence = (kebabCase) => {
    const withoutFilledSuffix = kebabCase.replace('-filled', '');
    const words = withoutFilledSuffix.split('-');
    const sentence = words
        .map((word) => {
        const trimWord = word.trim();
        const digitLessWord = trimWord.replace(/\d+/g, '');
        if (digitLessWord.length === 0) {
            return trimWord;
        }
        return digitLessWord;
    })
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return sentence;
};
export const getFallbackLabelFromIconName = (iconName) => {
    if (!iconName) {
        return 'Unknown';
    }
    if (isHttpUrl(iconName)) {
        return 'Unknown';
    }
    if (isSvgDataUrl(iconName)) {
        return 'Unknown';
    }
    const label = kebabCaseToUpperCaseSentence(iconName);
    if (label.length === 0) {
        return 'Unknown';
    }
    return label;
};
export const a11yHostAttributes = (hostElement, ignoreAttributes = []) => {
    const attributeObject = {};
    a11yAttributes.forEach((attr) => {
        if (hostElement.hasAttribute(attr)) {
            const value = hostElement.getAttribute(attr);
            if (value !== null && !ignoreAttributes.includes(attr)) {
                attributeObject[attr] = hostElement.getAttribute(attr);
                hostElement.removeAttribute(attr);
            }
        }
    });
    return attributeObject;
};
const a11yAttributes = [
    'role',
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-braillelabel',
    'aria-brailleroledescription',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colindextext',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-description',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowindextext',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext'
];
//# sourceMappingURL=a11y.js.map
