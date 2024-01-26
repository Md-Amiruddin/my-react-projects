import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts/todoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {

  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos'))
    console.log(`storageTodos: ${storageTodos}`)
    if(storageTodos && storageTodos.length > 0){
      setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    console.log(`addTodo: ${todo}`)
    const temp = [{id: Date.now(), completed: false, ...todo},...todos]
    setTodos(temp)
  }

  const updateTodo = (todo, id) => {
    console.log(`updateTodo: ${todo}`)
    const tempTodo = {...todo, id: Date.now(), completed: false}
    const tempTodos = todos.map((prevTodo) => (prevTodo.id === id) ? tempTodo : prevTodo)
    setTodos(tempTodos)
  }

  const deleteTodo = (id) => {
    const tempTodos = todos.filter((todo) => todo.id!==id)
    setTodos(tempTodos)
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id===id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <TodoProvider value={{todos,addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
