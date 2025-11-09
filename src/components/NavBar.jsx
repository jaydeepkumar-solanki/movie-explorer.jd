import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <nav className="navbar">
        <a className="logo" href="/" data-discover="true">
          <h2>🎬 Movie Explorer</h2>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </nav>   
  )
}

export default NavBar
