type ScreenGrabClientProps = {
    server: string;
    apiKey: string;
};
export declare class ScreenGrabClient {
    siteUrl: string;
    opts: ScreenGrabClientProps;
    constructor(opts?: Partial<ScreenGrabClientProps>);
    url(siteUrl: string): this;
    grab(selector?: string): Promise<any>;
}
export declare const ScreenGrab: (opts?: Partial<ScreenGrabClientProps> | string) => ScreenGrabClient;
export {};
