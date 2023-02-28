import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsConeStriped} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsConeStriped className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
              
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ WorldWide</small>
              
            </article>

            <article className="about__card">
              <TbFolders className='about__icon' />
              <h5>Projects</h5>
              <small>30+ projects</small>
            </article>
          </div>

          <p>
            I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and PHP. 
            I build websites that delight and inform. I do it 
            well I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction . I do my best to stay on top of changes 
            in the state of the art so that I can meet challenges with tools well suited to the job at hand. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About