import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const countClick = () => {
    setCount(count + 1);
  }


  return (
    <div>
        <button onClick={countClick}>
          count is {count}
        </button>
    </div>
  )
}

export default App
