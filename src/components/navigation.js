import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/works">My Works</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About Me</Link>
   
    <ThemeChanger/>
  </nav>
  
  
)