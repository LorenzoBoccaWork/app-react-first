import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('black')
  const [italic, setItalic] = useState(false)
  const [size, setSize] = useState(16)

  const changeColor = () => {
    setColor(color === 'black' ? 'red' : 'black')
  }

  const toggleItalic = () => {
    setItalic(!italic)
  }

  const changeSize = () => {
    setSize(size === 16 ? 20 : 16)
  }
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={changeColor}>Cambia colore</button>
        <button onClick={toggleItalic}>Stile Italic</button>
        <button onClick={changeSize}>Cambia dimensione</button>
        <p style={{ color, fontStyle: italic ? 'italic' : 'normal', fontSize: `${size}px` }}>
          Cambiami di nuovo!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
