import React from 'react'
import "./Header.css"
const Header = () => {
  return (

      <header className='header'>
      <h1 className='logo'><a href='#home'>My App</a></h1>
      <ul className='main-nav'>
       <li><a href="#home">HOME</a></li> 
       <li><a href="#use-cases">USE CASES</a></li> 
       <li><a href="#features">FEATURES</a></li>
       <li><a href="#pricing">PRICING</a></li> 
      </ul>
    </header>
    
  )
}

export default Header;
