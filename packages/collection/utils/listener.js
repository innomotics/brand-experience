import { getElement } from "@stencil/core";
const defaultOptions = {
    target: 'window',
    defaultEnabled: true,
};
export function createListener(event, options = {}) {
    const opts = {
        ...defaultOptions,
        ...options,
    };
    let callback;
    const onEvent = (event) => {
        callback(event);
    };
    const resultObject = {
        on: (onEventCallback) => {
            callback = onEventCallback;
        },
        isEnabled: opts.defaultEnabled,
        enable: (state) => {
            resultObject.isEnabled = state;
            if (state) {
                addEventListener(event, onEvent);
            }
            else {
                removeEventListener(event, onEvent);
            }
        },
        destroy: () => {
            resultObject.enable(false);
        },
    };
    resultObject.enable(opts.defaultEnabled);
    return resultObject;
}
export function OnListener(event, fnExp) {
    return (proto, methodName) => {
        const { componentWillLoad, componentWillRender, disconnectedCallback } = proto;
        if (fnExp) {
            proto.componentWillRender = function () {
                const host = getElement(this);
                host[`__ix__${methodName}`]?.enable(fnExp(this));
                return componentWillRender && componentWillRender.call(this);
            };
        }
        proto.componentWillLoad = function () {
            const listener = createListener(event);
            const host = getElement(this);
            const method = this[methodName];
            host[`__ix__${methodName}`] = listener;
            listener.on(method.bind(this));
            return componentWillLoad && componentWillLoad.call(this);
        };
        proto.disconnectedCallback = function () {
            const host = getElement(this);
            if (host && host[`__ix__${methodName}`]) {
                host[`__ix__${methodName}`]?.destroy();
                host[`__ix__${methodName}`] = null;
            }
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}
//# sourceMappingURL=listener.js.map
