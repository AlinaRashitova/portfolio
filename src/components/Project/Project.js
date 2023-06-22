import React from 'react'
import './Project.css'

const Project = (props) => {
  return (
    <article className="project">
      <img src={props.srcImage} alt={props.alt} className="project__image" />
      <a
        className="project__info"
        href={props.href}
        target="_blank"
        rel="noreferrer">
        {props.name}
      </a>
    </article>
  )
}

export default Project
