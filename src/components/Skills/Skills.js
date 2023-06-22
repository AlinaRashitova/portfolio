import React from 'react'
import './Skills.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import html5logo from '../../images/html5.svg'
import css3logo from '../../images/css3.svg'
import JSlogo from '../../images/javascript.svg'
import reactlogo from '../../images/react.svg'

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <SectionTitle title="Skills" />
      <ul className="skills__list">
        <li className="skills__list_item">
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            className="skills__link"
            target="_blank"
            rel="noreferrer">
            <img src={html5logo} alt="HTML5Logo" className="skills__link_logo" />
            HTML5
          </a>
        </li>
        <li className="skills__list_item">
          <a
            href="https://www.tutorialrepublic.com/css-tutorial/"
            className="skills__link"
            target="_blank"
            rel="noreferrer">
            <img src={css3logo} alt="CSS3Logo" className="skills__link_logo" />
            CSS3
          </a>
        </li>
        <li className="skills__list_item">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="skills__link"
            target="_blank"
            rel="noreferrer">
            <img src={JSlogo} alt="JSLogo" className="skills__link_logo" />
            JavaScript
          </a>
        </li>
        <li className="skills__list_item">
          <a
            href="https://react.dev/"
            className="skills__link"
            target="_blank"
            rel="noreferrer">
            <img src={reactlogo} alt="ReactLogo" className="skills__link_logo" />
            React
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Skills
