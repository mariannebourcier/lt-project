'use client'
import React from 'react'
import style from './footer.module.scss'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter();
  return (
    <div className={style.main_container}>
      <div className={style.sub_container}>
      <div className={style.content_container}>
        <span onClick={() => router.push('/')}>Home</span>
        <span>Planning</span>
        <span>Resources</span>
        <span>Contact Us</span>
        <span>Register / Login</span>
      </div>
      <div className={style.content_container}>
        <span onClick={() => router.push('/about')}>About</span>
        <span onClick={() => router.push('/team')}>Our team</span>
        <span>Security & Privacy</span>
      </div>
      </div>
     
    <div className={style.logo_container}>
      🐁
    </div>
    <div className={style.horiz_line}/>
    <p>© 2024 My Website. All rights reserved.</p>
    </div>
  )
}

export default Footer;