import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo'
import { ScreenGrab } from './lib/screengrab'
import { Share, ShareUrl } from './lib/share'

// if using local server
// start screengrab-server 
// @see https://docs.screengrab.cloud
const screengrab = ScreenGrab({
  // server: 'http://localhost:3030', // local server
  server: 'https://api.screengrab.cloud', // cloud server
  apiKey: '' // enter your api key for cloud access
})

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [siteSelector, setSiteSelector] = useState('')

  const getScreenGrab = async (selector?: string, url?: string) => {
    const image = await screengrab
      .url(url || 'https://memezoo.app')
      .grab(selector)
    setImageUrl(image.url)
    console.log('innerHTML', image)
  }

  const share = (site: keyof typeof ShareUrl) => {
    Share.share(site, imageUrl)
  }

  const onChangeSiteUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteUrl(event.target.value)
  }

  const onChangeSiteSelector = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteSelector(event.target.value)
  }

  return (
    <div className='app'>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {
          imageUrl ? (
            <div>
              <div className='image-box'>
                <img src={imageUrl} width={'50%'} />
              </div>
              <div>
                <button onClick={() => share('facebook')}>
                  Share Facebook
                </button>
                {/* <button onClick={() => share('twitter')}>
                  Share Twitter
                </button> */}
                <button onClick={() => share('instagram')}>
                  Share Instagram
                </button>
                <button onClick={() => share('whatsapp')}>
                  Share WhatsApp
                </button>
                <button onClick={() => share('telegram')}>
                  Share Telegram
                </button>
              </div>
            </div>
          ) : null
        }
        <div style={{ width: 100, height: 100 }}>
          <Logo />
        </div>
      </div>
      <h1>ScreenGrab.js</h1>
      <div className='card'>
        <input onChange={onChangeSiteUrl} placeholder='https://google.com' />
        <button onClick={() => getScreenGrab(siteSelector, siteUrl || 'https://google.com')}>
          Grab Url
        </button>
      </div>
      <div>
      Optional <input onChange={onChangeSiteSelector} placeholder='Site CSS Selector' />
      </div>
      <div className="card">
        <button onClick={() => getScreenGrab()}>
          Grab Memezoo.app Homepage
        </button>
        <button onClick={() => getScreenGrab('.meme-image')}>
          Grab First Meme
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <a target='_blank' href="https://docs.screengrab.cloud" className="read-the-docs">
        Read the full docs
      </a>
    </div>
  )
}

export default App
