import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>

      <a href="#" className="footer__logo">Mad.Dev</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/mustafa-madkour-dev" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MustafaMDKR" target='_blank'><FaGithub/></a>
        <a href="https://medium.com/@mustafamdkr" target='_blank'><BsMedium/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mad.Dev All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer