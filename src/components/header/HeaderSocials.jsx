import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="linkedin.com" target="_blank"><BsLinkedin /></a>
      <a href="github.com" target="_blank"><FaGithub /></a>
      <a href="dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials