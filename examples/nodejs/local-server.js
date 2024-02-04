import { ScreenGrab } from '../../index';

const screengrab = ScreenGrab({
  server: 'http://localhost:3031'
})

screengrab
  .url('https://memezoo.app')
  .grab()
  .then((image) => {
    console.log('screengrab url', image.url)
  })

