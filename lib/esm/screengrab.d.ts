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
    post(path: string, selector?: string): Promise<ScreenGrabResponse>;
    grab(selector?: string): Promise<Pick<ScreenGrabResponse, 'url'>>;
    grabHtml(selector?: string): Promise<Pick<ScreenGrabResponse, 'innerHTML'>>;
}
export declare const ScreenGrab: (opts?: Partial<ScreenGrabClientProps> | string) => ScreenGrabClient;
