export type ListenerOptions = {
    target?: 'window';
    defaultEnabled?: boolean;
};
export declare function createListener(event: string, options?: ListenerOptions): {
    on: (onEventCallback: any) => void;
    isEnabled: boolean;
    enable: (state: boolean) => void;
    destroy: () => void;
};
export declare function OnListener<T>(event: string, fnExp?: (self: T) => boolean): (proto: any, methodName: string) => void;
