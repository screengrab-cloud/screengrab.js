# ScreenGrab.js

Take screengrabs of HTML elements or React components on your website

Website: https://screengrab.cloud

Docs: https://docs.screengrab.cloud

Github: https://github.com/screengrab-cloud/screengrab.js

## Get Started

Fist log into https://screengrab.cloud and get your API Key from the dashboard

## Quick Start

Install `screengrab.js` library

```sh
npm install --save screengrab.js
```
or
```sh
yarn add screengrab.js
```

The simplest is to use the cloud hosted ScreenGrab.cloud

```ts
import { ScreenGrab } from 'screengrab.js'

const screengrab = ScreenGrab('api-key')

const image = await screengrab.url('https://memezoo.app').grab()

console.log('screengrab url', image.url)

```

If you want to test on your localhost use the `screengrab-server` dev server

Instructions on installing dev server: 
https://github.com/imageapi-dev/screengrab-server

Then add your server location to `screengrab.js` when initializing.

```ts
import { ScreenGrab } from 'screengrab.js'

const screengrab = ScreenGrab({
  server: 'http://localhost:3031'
})

const image = await screengrab.url('https://memezoo.app').grab()

console.log('screengrab url', image.url)

```

For detailed information refer to https://docs.screengrab.cloud 