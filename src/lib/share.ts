export class ShareUrl {

  static facebook(text: string) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(text)}`;
    return url;
  }

  static twitter(text: string) {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    return url;
  }

  static linkedin(text: string) {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(text)}`;
    return url;
  }

  static pinterest(text: string, imageUrl?: string) {
    const url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(text)}&media=${encodeURIComponent(imageUrl)}`;
    return url;
  }

  static instagram(text: string) {
    const url = `https://www.instagram.com/?bio=${encodeURIComponent(text)}`;
    return url;
  }

  static telegram(text: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(text)}`;
    return url;
  }

  static whatsapp(text: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    return url;
  }

  // @todo
  static discord(text: string)  {
    return text;
  }
}

export class Share extends ShareUrl {

  static share(service: keyof typeof ShareUrl, ...args: [text: string, imageUrl?: string]) {
    const fn = ShareUrl[service]
    const url = typeof fn === 'function' ? fn(...args) : ''
    url && Share.openWindow(url)
  }

  static openWindow(url: string) {
    window.open(url)
  }

  // @todo
  static download(text: string)  {
    return text;
  }
}