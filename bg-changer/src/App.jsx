import { useState } from 'react'


function App() {
  const [color, setcolor]= useState("olive")

  return (
    <div className="h-screen w-full text-right text-lg" style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap align-center items-space-around bottom-12 inset-x-5 p-2 bg-yellow-200 shadow-xl rounded-3xl justify-evenly'>
     <button className='px-3 bg-[#ff0000] rounded-2xl' onClick={()=> setcolor("#ff0000")} >Red</button>
       <button className='px-3 bg-[#e6e6fa] rounded-2xl' onClick={()=>setcolor("#e6e6fa")}>Lavender</button>
         <button className='px-3 bg-[#ff00ff] rounded-2xl ' onClick={()=>setcolor("#ff00ff")}>magenta</button>
           <button className='px-3 bg-[#008080] rounded-2xl' onClick={()=>setcolor("#008080")}>teal</button>
             <button className='px-3 bg-[#0000ff] rounded-2xl' onClick={()=>setcolor("#0000ff")}>blue</button>
      </div> 
    </div>
  )
}

export default App
