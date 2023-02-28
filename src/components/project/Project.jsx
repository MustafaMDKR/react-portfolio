import React from 'react'
import './project.css'
import IMG from '../../assets/portfolio.png'
import {BsGithub} from 'react-icons/bs'


const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent & Relevant</h5>
      <h2>Projects</h2>
      <div className="project">
        <div className="container project__container">
          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={IMG} alt="project image" />
            </div>
            <h3>Project Title</h3>
            <div className="project__item-cta">
              <a href="" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Project