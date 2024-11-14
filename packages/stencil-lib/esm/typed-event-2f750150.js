/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class TypedEvent {
    listeners = [];
    listenersOncer = [];
    on = (listener) => {
        this.listeners.push(listener);
        return {
            dispose: () => this.off(listener),
        };
    };
    once = (listener) => {
        this.listenersOncer.push(listener);
    };
    off = (listener) => {
        const callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1) {
            this.listeners.splice(callbackIndex, 1);
        }
    };
    emit = (event) => {
        /** Update any general listeners */
        this.listeners.forEach(listener => listener(event));
        /** Clear the `once` queue */
        if (this.listenersOncer.length > 0) {
            const toCall = this.listenersOncer;
            this.listenersOncer = [];
            toCall.forEach(listener => listener(event));
        }
    };
    pipe = (te) => {
        return this.on(e => te.emit(e));
    };
}

export { TypedEvent as T };

//# sourceMappingURL=typed-event-2f750150.js.map