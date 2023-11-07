import { useState } from 'react'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
    </>
  )
}

export default App
