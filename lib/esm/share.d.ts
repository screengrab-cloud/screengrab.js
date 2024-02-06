export declare class ShareUrl {
    static facebook(text: string): string;
    static twitter(text: string): string;
    static linkedin(text: string): string;
    static pinterest(text: string, imageUrl?: string): string;
    static instagram(text: string): string;
    static telegram(text: string): string;
    static whatsapp(text: string): string;
    static discord(text: string): string;
}
export declare class Share extends ShareUrl {
    static share(service: keyof typeof ShareUrl, ...args: [text: string, imageUrl?: string]): void;
    static openWindow(url: string): void;
    static download(text: string): string;
}
