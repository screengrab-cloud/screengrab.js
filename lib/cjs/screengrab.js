"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenGrab = exports.ScreenGrabClient = void 0;
class ScreenGrabClient {
    constructor(opts) {
        var _a;
        Object.defineProperty(this, "siteUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.location) === null || _a === void 0 ? void 0 : _a.href
        });
        Object.defineProperty(this, "opts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                server: 'https://api.screengrab.cloud',
                apiKey: ''
            }
        });
        if (opts) {
            Object.assign(this.opts, opts);
        }
    }
    url(siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
    grab(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const serverUrl = `${this.opts.server}/screenshot/create`;
            const res = yield fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "url": this.siteUrl,
                    "viewportSize": {
                        "width": 1200,
                        "height": 800
                    },
                    "locator": selector,
                    "wait": 0
                })
            });
            const json = yield res.json();
            return json.data;
        });
    }
}
exports.ScreenGrabClient = ScreenGrabClient;
const ScreenGrab = (opts) => {
    if (typeof opts === 'string') {
        opts = { apiKey: opts };
    }
    return new ScreenGrabClient(opts);
};
exports.ScreenGrab = ScreenGrab;
