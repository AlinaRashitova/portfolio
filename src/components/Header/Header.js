import React from 'react'
import './Header.css'
import photo from '../../images/photo.png'

const Header = () => {
  return (
    <header class="header">
      <div className="header__greeting">
        <img src={photo} alt="Logo" className="header__logo" />
        <h1 class="header__title">Hello, I'm a web-developer
          <span className="header__title_span">
            &#60; Alina Rashitova &#8725;&#62;
          </span>
        </h1>
      </div>
      <nav className="header__nav">
        <li className="header__nav_item">
          <a href="#projects" className="header__nav_link">
            <span className="header__nav_span">#</span>
            Projects
          </a>
        </li>
        <li className="header__nav_item">
          <a href="#about-me" className="header__nav_link">
            <span className="header__nav_span">#</span>
            About me
          </a>
        </li>
        <li className="header__nav_item">
          <a href="#skills" className="header__nav_link">
            <span className="header__nav_span">#</span>
            Skills
          </a>
        </li>
        <li className="header__nav_item">
          <a href="#contacts" className="header__nav_link">
            <span className="header__nav_span">#</span>
            Contacts
          </a>
        </li>
      </nav>
    </header>
  )
}

export default Header
