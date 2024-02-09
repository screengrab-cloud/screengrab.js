export type ScreenGrabClientProps = {
  server: string;
  apiKey: string;
}

export type ScreenGrabResponse = {
  url: string;
  innerHTML: string;
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

  async post(path:string, selector?: string): Promise<ScreenGrabResponse> {
    const serverUrl = `${this.opts.server}${path}`
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
    const data = {
      url: '',
      innerHTML: ''
    }
    return { ...data, ...json.data } as ScreenGrabResponse
  }

  async grab(selector?: string): Promise<Pick<ScreenGrabResponse, 'url'>> {
    const data = await this.post('/screenshot/create', selector)
    return data
  }

  async grabHtml(selector?: string): Promise<Pick<ScreenGrabResponse, 'innerHTML'>> {
    const data = await this.post('/html/innerHTML', selector)
    return data
  }

}

export const ScreenGrab = (opts?: Partial<ScreenGrabClientProps>|string) => {
  if (typeof opts === 'string') {
    opts = { apiKey: opts }
  }
  return new ScreenGrabClient(opts)
}