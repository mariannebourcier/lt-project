'use client'
import BasicButtonComponent from '@/ui/basic-button/basic-button.component'
import React from 'react'
import style from './nav.module.scss'

const NavComponent = () => {
  return (
    <div className={style.main_container}>
      <div className={style.logo_container}>
        🐲 Legal Tech
      </div>
      <div className={style.links_container}>
        <span>Plan</span>
        <span>Resources</span>
        <span>Contact</span>
        <BasicButtonComponent text='Register'/>
      </div>

    </div>
  )
}

export default NavComponent;