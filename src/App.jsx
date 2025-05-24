import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("");
  return (
    <>
      <div>
        <label>
          Enter your name: <br />
        </label>
      </div>
      <div>
        <input type="text" onChange={(e) => setName("Hello " + e.target.value + "!")} />
        <p>{name}</p>
      </div>

    </>
  )
}

export default App
