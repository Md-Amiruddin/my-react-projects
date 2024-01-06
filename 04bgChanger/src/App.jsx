import { useState } from 'react'

function App() {

  const [color, setColor] = useState('slateblue');

  return (
    <div className='w-full h-screen flex justify-center duration-200' style={{backgroundColor : color}}>
      <div className='flex flex-wrap fixed bottom-28 bg-white text-white font-semibold shadow-lg justify-evenly rounded-xl space-x-4 px-3 py-2'>
          <div><button className='bg-red-700 rounded-full py-2 px-4 my-2' onClick={() => setColor('red')}>Red</button></div>
          <div><button className='bg-yellow-500 rounded-full py-2 px-4 my-2' onClick={() => setColor('yellow')}>Yellow</button></div>
          <div><button className='bg-green-500 rounded-full py-2 px-4 my-2' onClick={() => setColor('green')}>Green</button></div>
          <div><button className='bg-violet-600 rounded-full py-2 px-4 my-2' onClick={() => setColor('violet')}>Violet</button></div>
          <div><button className='bg-orange-500 rounded-full py-2 px-4 my-2' onClick={() => setColor('orange')}>Orange</button></div>
      </div>
    </div>
  )
}

export default App
