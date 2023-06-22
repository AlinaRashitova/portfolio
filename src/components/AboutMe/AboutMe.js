import React from 'react'
import './AboutMe.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle title="About Me" />
      <p className="about-me__text">
        I&rsquo;m keen on&nbsp;front-end development as&nbsp;I like to&nbsp;design the interface, make it&nbsp;user-friendly and see the results of&nbsp;my&nbsp;work.
      </p>
      <p className="about-me__text">
        I&nbsp;have been studying web-development since November 2021. I&nbsp;have already finished the course
        &laquo;Web Design for Everybody&raquo; on&nbsp;the Coursera platform and &laquo;Web-developer&raquo; from Yandex.Practicum.
        I&nbsp;enhance my&nbsp;knowledge by&nbsp;reading professional literature (&laquo;Basics of&nbsp;JavaScript&raquo;, &laquo;Responsive design on&nbsp;HTML5 and CSS3 for any devices&raquo;, &laquo;JavaScript. Complete guide&raquo;), viewing relevant webinars and videos on&nbsp;YouTube.
      </p>
      <p className="about-me__text">
        I&nbsp;used to&nbsp;work with different people what really has improved my&nbsp;soft skills. Also I&nbsp;can analyze data properly and highlight crucial points since&nbsp;I have worked with a&nbsp;great amount of&nbsp;information.
      </p>
    </section>
  )
}

export default AboutMe
