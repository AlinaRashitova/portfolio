import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Skills />
        <Projects />
        <AboutMe />
        <Contacts />
        <Footer />
      </div>
    </div>

  )
}

export default App
