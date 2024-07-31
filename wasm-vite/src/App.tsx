import { useState } from 'react'
import { greet } from '@tongshisan/hello-wasm';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    greet('tongshisan')
  }

  return (
    <>
      <div>
        <h1 onClick={handleClick}>hello wasm</h1>
      </div>
    </>
  )
}

export default App
