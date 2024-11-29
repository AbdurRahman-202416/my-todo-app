import { useState } from 'react'

import viteLogo from '/vite.svg'
import HomePage from './Pages/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
