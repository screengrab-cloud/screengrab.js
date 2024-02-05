var n = Object.defineProperty;
var a = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (a(t, typeof e != "symbol" ? e + "" : e, r), r);
var i;
class o {
  constructor(e) {
    s(this, "siteUrl", (i = globalThis == null ? void 0 : globalThis.location) == null ? void 0 : i.href);
    s(this, "opts", {
      server: "https://api.screengrab.cloud",
      apiKey: ""
    });
    e && Object.assign(this.opts, e);
  }
  url(e) {
    return this.siteUrl = e, this;
  }
  async grab(e) {
    const r = `${this.opts.server}/screenshot/create`;
    return (await (await fetch(r, {
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
        locator: e,
        wait: 0
      })
    })).json()).data;
  }
}
const p = (t) => (typeof t == "string" && (t = { apiKey: t }), new o(t));
export {
  p as ScreenGrab,
  o as ScreenGrabClient
};
