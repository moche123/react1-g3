import React from 'react'

const Header = ({name,nameVariable, age=20}) => {
  return (
    <h1>Hello, {name}, {nameVariable} - {age}</h1>
  )
}

export default Header