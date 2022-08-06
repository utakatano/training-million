import { useList } from 'million/react'
import './App.css'

export const App = () => {
  const [list, delta] = useList([])

  return (
    <>
      <button
        onClick={() => {
          list.push(list.length + 1)
        }}
      >Add</button>

      <ul delta={delta}>
        {list.map((item: number) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}