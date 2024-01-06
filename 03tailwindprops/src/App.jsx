import { useState } from 'react'
import Card from './components/Card.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col space-y-4 items-center'>
      <h1 className='bg-green-600 p-5 rounded-xl'
      >React with Amir</h1>
      <Card username='Amir' btnText='Visit me'/>
      <Card username="Hp"/>
    </div>
  )
}

export default App
