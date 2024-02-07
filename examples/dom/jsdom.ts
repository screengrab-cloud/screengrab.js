import { ScreenGrab } from '../../index'
import { JSDOM } from 'jsdom'

const screengrab = ScreenGrab({
  // server: 'http://localhost:3031'
})

// grabs comments from producthunt screen-grab page
// the comments image
// the comments html is parsed with JSDOM
// the comments text is returned
screengrab
  .url('https://www.producthunt.com/posts/screen-grab')
  .grab('#comments')
  .then((grab) => {
    console.log('screengrab url', grab.url)

    const html = grab.innerHTML
    const dom = new JSDOM(html)

    const threadEls = dom.window.document
      .querySelectorAll('[data-test*=thread]')
      
    const threads = [...threadEls].map(thread => thread.textContent)

    console.log('comments', threads)

  })

