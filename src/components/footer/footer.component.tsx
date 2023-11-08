import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <div className={style.main_container}>
      <div className={style.sub_container}>
        <span>Home</span>
        <span>Planning</span>
        <span>Resources</span>
        <span>Contact Us</span>
        <span>Register / Login</span>
      </div>
      <div className={style.sub_container}>
        <span>About</span>
        <span>Our team</span>
        <span>Security & Privacy</span>
      </div>
    <div className={style.logo_container}>
      🐁
    </div>
    <div className={style.horiz_line}/>
    <p>© 2022 My Website. All rights reserved.</p>
    </div>
  )
}

export default Footer;