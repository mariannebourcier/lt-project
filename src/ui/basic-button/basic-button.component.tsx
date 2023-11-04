import React from 'react'
import style from './basic-button.module.scss'


interface BasicButtonComponentProps {
  /**
   * The text to display inside the button
   */
  text?: string;
}


const BasicButtonComponent = (props: BasicButtonComponentProps) => {
  return (
    <button className={style.button_container}>{props.text}</button>
  )
}

export default BasicButtonComponent;