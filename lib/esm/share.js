export class ShareUrl {
    static facebook(text) {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(text)}`;
        return url;
    }
    static twitter(text) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        return url;
    }
    static linkedin(text) {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(text)}`;
        return url;
    }
    static pinterest(text, imageUrl) {
        const url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(text)}&media=${imageUrl && encodeURIComponent(imageUrl)}`;
        return url;
    }
    static instagram(text) {
        const url = `https://www.instagram.com/?bio=${encodeURIComponent(text)}`;
        return url;
    }
    static telegram(text) {
        const url = `https://t.me/share/url?url=${encodeURIComponent(text)}`;
        return url;
    }
    static whatsapp(text) {
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        return url;
    }
    // @todo
    static discord(text) {
        return text;
    }
}
export class Share extends ShareUrl {
    static share(service, ...args) {
        const fn = ShareUrl[service];
        const url = typeof fn === 'function' ? fn(...args) : '';
        url && Share.openWindow(url);
    }
    static openWindow(url) {
        window.open(url);
    }
    // @todo
    static download(text) {
        return text;
    }
}
