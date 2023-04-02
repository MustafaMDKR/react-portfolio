import React from 'react'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/mustafa-madkour-dev" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/MustafaMadkour" target='_blank'><FaGithub/></a>
        <a href="https://medium.com/@mustafamdkr" target='_blank'><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials
