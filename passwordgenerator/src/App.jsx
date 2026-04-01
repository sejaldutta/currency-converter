import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [len, setlen] = useState(8)
  const[num, setnum]=useState(false)
  const[char, setchar]=useState(false)
  const [pass, setpass] = useState("")
// useRef hook
  const passwordRef=useRef(null)
  // method optimisation
 const passgen= useCallback(()=>{
  let password=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

  if(num){
    str += "0123456789"
  }
   
  if(char){
    str +="!@#$%^&*-+=[]{}~`"
  }
for (let i = 1; i <= len; i++) {
  let indexval = Math.floor(Math.random()*str.length + 1)
  password += str.charAt(indexval)
}
setpass(password)
// setpass is for optimisation in the array
 },[len,num,char,setpass])

const copypasstoclip= useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,3);
  window.navigator.clipboard.writeText(pass)
}, [pass])

//  any chhechhad then this run again
useEffect(()=>{
  passgen()
},[len, char,num, passgen])
  return (
  <>
  <div className='bg-black h-screen w-full text-white flex justify-center'>
    <div className='bg-gray-800 mt-5 px-10 pt-5 pb-5 rounded-2xl mb-7'>
    <h1 className='text-3xl'>Password Generator</h1>
    <input type="text" value={pass} readOnly placeholder="password" className='bg-gray-600 text-white mt-3 p-1 rounded-l-md w-md' ref={passwordRef}></input>
    <button className='bg-blue-800 rounded-r-md p-1 px-2' onClick={copypasstoclip}>copy</button>
    
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
        <input type="range" min={4} max={20} value={len} className='cursor-pointer mt-5' onChange={(e)=>{setlen(e.target.value)}}></input>
<label className='text-teal-300 mt-3'>length:{len}</label>
      </div>
      <div className='flex items-center gap-x-1 ml-3 mt-4 text-teal-300'>
        <input type="checkbox" id="numinput" defaultChecked={num} onChange={()=>{
          setnum(prev=>!prev)
        }}></input>
        <label htmlfor="numinput">Numbers</label>
      </div>
      <div className='mt-4 text-teal-300 ml-3 flex items-center gap-x-1'>
        <input type="checkbox" id="charinput" defaultChecked={char} onChange={()=>{
          setchar(prev=>!prev)
        }}></input>
        <label htmlfor="charinput">Character</label>
      </div>
    </div>
    </div>
  </div>
  </>
  )
}

export default App
