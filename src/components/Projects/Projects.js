import React from 'react'
import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Project from '../Project/Project'
import calculator from '../../images/calculator.jpg'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <SectionTitle title="Projects" />
      <div className="projects__container">
        <Project srcImage={calculator} alt="Calculator" href="" name="Calculator" />
        <Project srcImage="" alt="Calculator" href="" />
        <Project srcImage="" alt="Calculator" href="" />
        <Project srcImage="" alt="Calculator" href="" />
        <Project srcImage="" alt="Calculator" href="" />
        <Project srcImage="" alt="Calculator" href="" />
      </div>
    </section>
  )
}

export default Projects
