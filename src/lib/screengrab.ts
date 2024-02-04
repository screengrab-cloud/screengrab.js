type ScreenGrabClientProps = {
  server: string;
  apiKey: string;
}

export class ScreenGrabClient {

  siteUrl = globalThis?.location?.href

  opts: ScreenGrabClientProps = {
    server: 'https://api.screengrab.cloud',
    apiKey: ''
  }

  constructor(opts?: Partial<ScreenGrabClientProps>) {
    if (opts) {
      Object.assign(this.opts, opts)
    }
  }

  url(siteUrl: string) {
    this.siteUrl = siteUrl
    return this
  }

  async grab(selector?: string) {
    const serverUrl = `${this.opts.server}/screenshot/create`
    const res = await fetch(serverUrl, {
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
    })
    const json = await res.json()
    return json.data
  }

}

export const ScreenGrab = (opts?: Partial<ScreenGrabClientProps>|string) => {
  if (typeof opts === 'string') {
    opts = { apiKey: opts }
  }
  return new ScreenGrabClient(opts)
}