export type DelegateConfig = {
    parentElement?: Element;
};
export interface FrameworkDelegate {
    attachView<R = HTMLElement>(view: any, config?: DelegateConfig): Promise<R>;
    removeView(view: any): Promise<void>;
}
declare class DefaultFrameworkDelegate implements FrameworkDelegate {
    attachView<R = HTMLElement>(view: any, config?: DelegateConfig): Promise<R>;
    removeView(view: any): Promise<void>;
}
export declare function registerFrameworkDelegate(delegate: FrameworkDelegate): void;
export declare const resolveDelegate: () => FrameworkDelegate;
export declare const getCoreDelegate: () => DefaultFrameworkDelegate;
export {};
