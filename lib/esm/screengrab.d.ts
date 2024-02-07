export type ScreenGrabClientProps = {
    server: string;
    apiKey: string;
};
export type ScreenGrabResponse = {
    url: string;
    innerHTML: string;
};
export declare class ScreenGrabClient {
    siteUrl: string;
    opts: ScreenGrabClientProps;
    constructor(opts?: Partial<ScreenGrabClientProps>);
    url(siteUrl: string): this;
    grab(selector?: string): Promise<ScreenGrabResponse>;
}
export declare const ScreenGrab: (opts?: Partial<ScreenGrabClientProps> | string) => ScreenGrabClient;
