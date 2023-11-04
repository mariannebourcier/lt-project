import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <div className={style.main_container}>

      <div className={style.footer_content}>
        <p>© 2022 My Website. All rights reserved.</p>
      </div>
      <div className={style.footer_sections}>
          <div className={style.footer_section}>
            <h3>About</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className={style.footer_section}>
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>

        </div>

        <div className={style.footer_socials}>
          <a href="https://www.facebook.com/yourpage">Facebook</a>
          <a href="https://www.twitter.com/yourpage">Twitter</a>
          <a href="https://www.instagram.com/yourpage">Instagram</a>
          
        </div>
    
    </div>
  )
}

export default Footer;