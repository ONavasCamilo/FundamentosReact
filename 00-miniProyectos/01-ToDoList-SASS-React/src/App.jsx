// import { useState } from 'react'
import '../styles/App.scss'
import Header from './views/Header.jsx'
import ToDoList from './views/ToDoList.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <ToDoList />
    </>
  )
}

export default App
