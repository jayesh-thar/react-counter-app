import React from 'react'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  if (count < 0) {
    alert("Number Can't be Decrease more...");
    setCount(0);
  }

  return (
    <div className='bg-blue-300 flex items-center justify-center w-full h-screen'>
      <div className="flex items-center justify-center gap-3 border-4 rounded-3xl border-dashed flex-col px-16 py-12">
        <p className='text-3xl'>Count: {count}</p>
        <div className="flex gap-3 mt-2">
          <button className='bg-purple-400 px-2 py-1 rounded-xl font-bold border-2 border-purple-800 cursor-pointer' onClick={() => setCount(count + 1)}>Increase</button>
          <button className='bg-purple-400 px-2 py-1 rounded-xl font-bold border-2 border-purple-800 cursor-pointer' onClick={() => setCount(count - 1)}
          >Decrease</button>
          <button className='bg-purple-400 px-2 py-1 rounded-xl font-bold border-2 border-purple-800 cursor-pointer' onClick={() => setCount(0)}
          >Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App