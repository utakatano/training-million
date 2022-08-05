import { useState } from 'react'
import './App.css'

export const App: React.FC = () => {
  const [items, setItems] = useState([])

  return (
    <>
      <button
        onClick={() => {
          setItems(items.concat(items.length + 1))
        }}
      >Add (useState)</button>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}