import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      TaskFlow
    </h1>
    <p>it is a web application which help multiple team members to create,assign and track tasks in an organized way </p>
    </>
  )
}

export default App
