import { useState } from 'react'
import './App.css'
import { ScreenGrab } from './lib/screengrab'
import Logo from './assets/Logo'

// if using local server
// start screengrab-server 
// @see https://docs.screengrab.cloud
const screengrab = ScreenGrab({
  // server: 'http://localhost:3031', // local server
  server: 'https://api.screengrab.cloud', // cloud server
  // server: 'https://screengrab-server-production.up.railway.app', // cloud dev
  apiKey: '' // enter your api key for cloud access
})

function App() {
  const [imageUrl, setImageUrl] = useState('')

  const getScreenGrab = async (selector?: string) => {
    const image = await screengrab
      .url('https://memezoo.app')
      .grab(selector)
    setImageUrl(image.url)
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {
          imageUrl ? (
            <img src={imageUrl} width={'50%'} />
          ) : null
        }
        <div style={{ width: 100, height: 100 }}>
          <Logo />
        </div>
      </div>
      <h1>ScreenGrab.js</h1>
      <div className="card">
        <button style={{ marginRight: 10 }} onClick={() => getScreenGrab()}>
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
    </>
  )
}

export default App
