// App.jsx — мінімальна зміна: автоперегенерація головної палітри та перехід у /generator
import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters'
import { Header } from './components/header/header.component'
import Login from './pages/Login/login'
import { Generator } from './pages/Generator/generator'
import SpecialColor from './pages/specialColor/specialcolor'
// import { Registration } from './pages/Registration/registration/'



function App() {
  const PALETTE_SIZE = 5
  const [mainPalette, setMainPalette] = useState(() =>
    getRandomPalette(PALETTE_SIZE)
  )

  useEffect(() => {
    const id = setInterval(() => {
      setMainPalette(getRandomPalette(PALETTE_SIZE))
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/special-color" element={<SpecialColor />} />
        {/* <Route path="/registration" element={<Registration />} /> */}



        <Route
          path="/"
          element={
            <>
              {/* HERO */}
              <section className="hero">
                <div className="heroText">
                  <h1>
                    <HoverColorLetters
                      text="The super fast color palettes generator!"
                      defaultColor="black"
                      colors={[
                        '#ed2525ff',
                        '#fb3d66ff',
                        '#a33de8ff',
                        '#3e38e7ff',
                        '#2ab3e5ff',
                        '#1cc341ff',
                        '#e1e440ff',
                        '#ea7d29ff'
                      ]}
                    />
                  </h1>

                  <p>
                    Create the perfect palette or get inspired by
                    <br />
                    thousands of beautiful color schemes.
                  </p>

                  <div className="heroButtons">
                    <Link to="/generator">
                      <button className="btn btnOutline ol">
                        Start the Generator
                      </button>
                    </Link>

                    <button className="btn btnOutline oll">
                      Explore 10M+ Palettes
                    </button>
                  </div>
                </div>

                <Link to="/generator" className="palete">
                  <div
                    className="color c1"
                    style={{ backgroundColor: mainPalette[0] }}
                  />
                  <div
                    className="color c2"
                    style={{ backgroundColor: mainPalette[1] }}
                  />
                  <div
                    className="color c3"
                    style={{ backgroundColor: mainPalette[2] }}
                  />
                  <div
                    className="color c4"
                    style={{ backgroundColor: mainPalette[3] }}
                  />
                  <div
                    className="color c5"
                    style={{ backgroundColor: mainPalette[4] }}
                  />
                </Link>
              </section>

              {/* ===== TRUSTED SECTION ===== */}
              <section className="trustedd">
                <div className="trustedd-title">
                  TRUSTED BY 8+ MILLION CREATIVE MINDS AND TOP COMPANIES
                </div>

                <div className="logos">
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421784/media/63efa1d3d16c97552586e2ac6a280a6b2389b88f-100x48.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757422149/media/warnerbros.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421758/media/a9bfb23cca986ee16b0547274bcd7461ffd373aa-67x18.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757422338/media/5e789db505180ee41e0612d7d53e2ec48c9c5837-153x20.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421770/media/cc8b81fd47ded1e82d83258e2f674e0951e20fcc-86x18.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757422329/media/c641bb5bbe69c6b42344fd2333924a206ef43736-92x18.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421975/media/1622439415c22e4475400432eae4619d1592a8bc-71x22.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421653/media/Disney_wordmark.svg" />
                  <img src="https://res.cloudinary.com/coolors/image/upload/v1757421980/media/fb78b2f382a2d2d93b155601fbc9032379d2515d-79x20.svg" />
                </div>

                <div className="content">
                  <div className="text">
                  Coolors is the lightning-fast, ultra-intuitive color palette generator for designers, creators, and anyone seeking visual
                  harmony. Instantly generate beautiful palettes by hitting the spacebar, or explore millions of popular ones. Extract 
                  colors from images, check accessibility, and preview them on real designs. Organize your palettes into projects and export
                   them in multiple formats—effortlessly across web, apps, and plugins. Now with AI!
                  </div>

                  {/* <div className="color-cardd"> */}
                  <Link to="/special-color" className="color-carddd">


                    <small>COLOR OF THE DAY</small>

                    <div className="color-box">
                      <div className="color-left">
                        <div className="color-sample"></div>
                        <div className="color-hex">#301934</div>
                      </div>

                      <div className="color-innfo">
                        <h3>Midnight Violet</h3>
                        <p>
                          Intense violet-black depths fill any space with
                          intrigue and boldness.
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                </div>

                <div className="footer-title">
                  OUR TOOLS, LOVED BY MILLIONS
                </div>
              </section>

              {/* ===== GRID CARDS ===== */}
              <div className="grid">
                {[
                  ['Palette Generator', 'START THE GENERATOR'],
                  ['Explore Palettes', 'EXPLORE 10M+ PALETTES'],
                  ['Image Picker', 'LAUNCH THE IMAGE PICKER'],
                  ['Contrast Checker', 'TRY THE CONTRAST CHECKER'],
                  ['Palette Visualizer', 'OPEN THE VISUALIZER'],
                  ['Color Picker', 'LAUNCH THE COLOR PICKER'],
                  ['Tailwind Colors', 'PREVIEW TAILWIND COLORS'],
                  ['Color Bot', 'CHAT WITH COLOR BOT']
                ].map((item, i) => (
                  <div className={`kca m${i + 1}`} key={i}>
                    <h2>{item[0]}</h2>
                    <p>Create beautiful color schemes in seconds with the worldwide loved palette tool. Just hit the spacebar!</p>
                    <a href="#">
                      {item[1]} <span>→</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* ===== FINAL SECTION ===== */}
              <section className="lion">
                <HoverColorLetters
                      text="Make something colorful."
                      defaultColor="gray"
                      colors={[
                        '#ed2525ff',
                        '#fb3d66ff',
                        '#a33de8ff',
                        '#3e38e7ff',
                        '#2ab3e5ff',
                        '#1cc341ff',
                        '#e1e440ff',
                        '#ea7d29ff'
                      ]}
                    />
              </section>

              


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
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
