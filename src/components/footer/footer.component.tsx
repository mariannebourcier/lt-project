import React from 'react'
import style from './footer.module.scss'

const Footer = () => {
  return (
    <div className={style.main_container}>
      footer
      <div className={style.footer_content}>
        <p>© 2022 My Website. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;