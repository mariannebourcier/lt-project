'use client'
import BasicButtonComponent from '@/ui/basic-button/basic-button.component'
import React from 'react'
import style from './nav.module.scss'

/**
 * This navbar currently shows the UI for users that are not logged in or registered
 */
const Navbar = () => {
  return (
    <div className={style.main_container}>
      <div className={style.logo_container}>
        🐲 
      </div>
      <div className={style.links_container}>
        <span className={style.link}>Plan</span>
        <span className={style.link}>Resources</span>
        <span className={style.link}>Contact</span>
        <BasicButtonComponent text='Register'/>
      </div>

    </div>
  )
}

export default Navbar;