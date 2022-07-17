import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [size, setSize] = useState({ height: 300, width: 300 })
  const handleClick = () => {
    setSize(prev => {
      return {
        height: prev.height + 2,
        width: prev.width + 2
      }
    })
  }
  return (
    <div id="main" onClick={handleClick}>
      <img src={star} height={`${size.height}px`} width={`${size.width}px`} />
    </div>
  )
}


export default App;
