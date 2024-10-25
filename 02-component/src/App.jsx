import { useState } from 'react'
import './App.css'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Name></Name>
    </>
  )
}

export default App
