import './App.css'
import Todo from "./components/Todo"
import AddTodo from './components/AddTodo'

function App() {
  return (
    <>
      <div className='main'>
        <h1>Learn about redux</h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  )
}

export default App
