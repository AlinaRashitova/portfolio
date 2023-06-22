import React from 'react'
import './Footer.css'

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__year">&copy; {currentYear} Alina Rashitova</p>
    </footer>
  )
}

export default Footer
