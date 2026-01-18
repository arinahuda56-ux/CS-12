import { useState, useEffect } from 'react'
import './specialcolor.css'





export default function SpecialColor() {
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') setFullscreen(false)
    }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])



 const [color, setColor] = useState('#000')

useEffect(() => {
  const savedColor = localStorage.getItem('dailyColor')
  if (savedColor) {
    setColor(savedColor)
  }
}, [])

  return (
    <>
      <div
  className={`fullscreen-preview ${fullscreen ? 'active' : ''}`}
  style={{ backgroundColor: color }}
>
        <button
          className="fullscreen-close"
          aria-label="Close"
          onClick={() => setFullscreen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
       <span>{color.replace('#', '')}</span>
</div>

      <div className="container">
        <div className="header-row">
          <div>
            <div className="breadcrumb">Colors &gt; Midnight Violet</div>
            <h1>Midnight Violet</h1>
            <div className="subtitle">
              Intense violet-black depths fill any space with intrigue and
              boldness, channeling mystery and hidden elegance.
            </div>
          </div>

          <div className="envato-box">
            <strong>Envato</strong>
            Speed up your workflow with unlimited Graphic Assets.
          </div>
        </div>

      
        <div
  className="color-preview"
  style={{ backgroundColor: color }}
>
          <div className="preview-actions">
            <button aria-label="Edit">
              ✎
            </button>

            <button aria-label="Open" onClick={() => setFullscreen(true)}>
              ⤢
            </button>

            <button className="save-btn" aria-label="Save">
              ❤️ <span>Save</span> ▼
            </button>
          </div>

           <span>{color.replace('#', '')}</span>
</div>

        {/* CONVERSION */}
        <h2>Conversion</h2>
        <div className="conversion">
          <table>
            <tbody>
              <tr><td>HEX</td><td>301934</td></tr>
              <tr><td>RGB</td><td>48, 25, 52</td></tr>
              <tr><td>CMYK</td><td>8, 52, 0, 80</td></tr>
              <tr><td>HSB</td><td>291, 52, 20</td></tr>
              <tr><td>HSL</td><td>291, 35, 15</td></tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr><td>LAB</td><td>13, 17, -13</td></tr>
              <tr><td>XYZ</td><td>2, 2, 3</td></tr>
              <tr><td>LCH</td><td>13, 21, 322</td></tr>
              <tr><td>LUV</td><td>13, 8, -13</td></tr>
              <tr><td>HWB</td><td>291, 10, 80</td></tr>
            </tbody>
          </table>
        </div>



         <footer>
    <div className="zoo">

      <div className="cage">
        <h4>Tools</h4>
        <ul>
          <li>Generate your palettes</li>
          <li>Explore popular palettes</li>
          <li>Extract palette from image</li>
          <li>Contrast checker</li>
          <li>Preview palettes on designs</li>
          <li>Color picker</li>
          <li>Tailwind Colors</li>
          <li>Color Bot</li>
        </ul>
      </div>

      <div className="cage">
        <h4>Discover</h4>
        <ul>
          <li>List of colors</li>
          <li>Browse gradients</li>
          <li>Create a gradient</li>
          <li>Make a gradient palette</li>
          <li>Image converter</li>
          <li>Recolor your own design</li>
          <li>Create a collage</li>
          <li>Browse free fonts</li>
          <li>Font Generator</li>
        </ul>
      </div>
      <div className="cage">
        <h4>Apps</h4>
        <ul>
          <li>iOS App</li>
          <li>Figma Plugin</li>
          <li>Adobe Extension</li>
          <li>Chrome Extension</li>
        </ul>
      </div>

      <div className="cage">
        <h4>Company</h4>
        <ul>
          <li>Pricing</li>
          <li>License</li>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
          <li>Manage cookies</li>
          <li>Help center</li>
          <li>Advertise</li>
          <li>Affiliate</li>
          <li>Contact</li>
          <li>Feature Requests</li>
        </ul>
      </div>

    </div>
  </footer>
      </div>
    </>
  )
}