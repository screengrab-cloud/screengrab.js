var l = Object.defineProperty;
var u = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => (u(r, typeof t != "symbol" ? t + "" : t, e), e);
var c;
class p {
  constructor(t) {
    s(this, "siteUrl", (c = globalThis == null ? void 0 : globalThis.location) == null ? void 0 : c.href);
    s(this, "opts", {
      server: "https://api.screengrab.cloud",
      apiKey: ""
    });
    t && Object.assign(this.opts, t);
  }
  url(t) {
    return this.siteUrl = t, this;
  }
  async grab(t) {
    const e = `${this.opts.server}/screenshot/create`;
    return (await (await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: this.siteUrl,
        viewportSize: {
          width: 1200,
          height: 800
        },
        locator: t,
        wait: 0
      })
    })).json()).data;
  }
}
const w = (r) => (typeof r == "string" && (r = { apiKey: r }), new p(r));
class i {
  static facebook(t) {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`;
  }
  static twitter(t) {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}`;
  }
  static linkedin(t) {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(t)}`;
  }
  static pinterest(t, e) {
    return `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(t)}&media=${e && encodeURIComponent(e)}`;
  }
  static instagram(t) {
    return `https://www.instagram.com/?bio=${encodeURIComponent(t)}`;
  }
  static telegram(t) {
    return `https://t.me/share/url?url=${encodeURIComponent(t)}`;
  }
  static whatsapp(t) {
    return `https://wa.me/?text=${encodeURIComponent(t)}`;
  }
  // @todo
  static discord(t) {
    return t;
  }
}
class a extends i {
  static share(t, ...e) {
    const n = i[t], o = typeof n == "function" ? n(...e) : "";
    o && a.openWindow(o);
  }
  static openWindow(t) {
    window.open(t);
  }
  // @todo
  static download(t) {
    return t;
  }
}
export {
  w as ScreenGrab,
  a as Share,
  i as ShareUrl
};
