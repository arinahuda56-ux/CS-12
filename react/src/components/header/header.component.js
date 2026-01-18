import { useState, useRef, useEffect } from 'react' 
import { Link } from 'react-router-dom' 
import classes from './header.module.css' 
 
export const Header = () => { 
  const [toolsOpen, setToolsOpen] = useState(false) 
  const toolsRef = useRef(null) 
 
  useEffect(() => { 
    const handleClickOutside = (e) => { 
      if (toolsRef.current && !toolsRef.current.contains(e.target)) { 
        setToolsOpen(false) 
      } 
    } 
 
    document.addEventListener('click', handleClickOutside) 
    return () => document.removeEventListener('click', handleClickOutside) 
  }, []) 
 
  return ( 
    <header className={classes.header}> 
      <Link to="/"><div className={classes.logo}>coolors</div> </Link>
 
      <nav className={classes.headerNav}> 
 
        <div 
          ref={toolsRef} 
          className={`${classes.tools} ${toolsOpen ? classes.active : ''}`} 
          onClick={() => setToolsOpen(prev => !prev)} 
        > 
          <div className={classes.toolsBtn}> 
            <span> 
              Tools 
              <svg className={classes.arrow} viewBox="0 0 24 24"> 
                <path d="M6 9l6 6 6-6" /> 
              </svg> 
            </span> 
          </div> 
 
          <div className={classes.dropdown}> 
            <div className={classes.dropdownTitle}>TOOLS</div> 
            <a href="#">Generate your palettes</a> 
            <a href="#">Explore popular palettes</a> 
            <a href="#">Extract palette from image</a> 
            <a href="#">Contrast checker</a> 
            <a href="#">Preview palettes on designs</a> 
            <a href="#">Color picker</a> 
            <a href="#">Tailwind Colors</a> 
            <a href="#">Color Bot</a> 
          </div> 
        </div> 
 
        <a href="#" className={classes.proooo}>Go Pro</a> 
        <Link to="/login" className={classes.signin}>Sign in</Link>
        <Link to="/registration" className={classes.signin}>Sign up</Link>
        
      </nav> 
    </header> 
  ) 
}