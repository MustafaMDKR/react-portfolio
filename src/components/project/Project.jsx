import React from 'react'
import './project.css'
import IMG from '../../assets/portfolio.png'
import Portfolio from '../../assets/portfolio2.png'
import Dice from '../../assets/dice.png'
import Budgey from '../../assets/budgey.png'
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
            <h3>Portfolio React</h3>
            <div className="project__item-cta">
              <a href="https://github.com/MustafaMDKR/react-portfolio" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="https://mustafamdkr.github.io/react-portfolio" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={Dice} alt="project image" />
            </div>
            <h3>Dice Game</h3>
            <div className="project__item-cta">
              <a href="https://github.com/MustafaMadkour/dice-game" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="https://mustafamadkour.github.io/dice-game" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={Portfolio} alt="project image" />
            </div>
            <h3>SCSS Portfolio</h3>
            <div className="project__item-cta">
              <a href="https://github.com/MustafaMadkour/portfolio" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="https://mustafamadkour.github.io/portfolio" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className="project__item">
            <div className="project__item-image">
              <img src={Budgey} alt="project image" />
            </div>
            <h3>Budgey</h3>
            <div className="project__item-cta">
              <a href="https://github.com/MustafaMadkour/budgey" className="btn" target='_blank'>Code on <BsGithub /></a>
              <a href="https://mustafamadkour.github.io/budgey" className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Project