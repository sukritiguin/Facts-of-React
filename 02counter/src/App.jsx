import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [currentValue, updateValue] = useState(0)

  const addvalue = () => {
    updateValue(currentValue + 1)
  }
  const removevalue = () => {
    updateValue(currentValue - 1)
  }

  return (
    <>
      <h1>Counter Project - Increment or Decrement Value</h1>
      <h2>Current Value : {currentValue}</h2>
      <button onClick={addvalue}>Increment Value</button>
      <button onClick={removevalue}>Decrement Value</button>
    </>
  )
}

export default App
