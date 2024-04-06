import React from 'react'
import HeaderStyles from './Header.module.scss'

const Header = (props) => {
  const { categories, text } = props
  return (
    <div className={HeaderStyles.header}>
      <h1>{text}</h1>
      <div className={HeaderStyles.btns}> 
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
    </div>
  )
}

export default Header