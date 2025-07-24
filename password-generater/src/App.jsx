import { useState,useEffect } from 'react'
function App() {
  const [password,setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [splcharactersAllowed,setSplcharactersAllowed] = useState(false);
  const [numbersAllowed,setNumbersAllowed] = useState(false)
  function ChangeLength(){
    setLength(event.target.value)
  }
  useEffect(() => {
    let numbers = "1234567890";
    let splChar = "!@#$%^&*()_+={:>}'|,./~";
    let pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    pass = numbersAllowed? pass+numbers : pass;
    pass = splcharactersAllowed? pass+splChar : pass
    let GeneratePass = ""
    for(let i = 1; i<=length;i++){
      let randNum = Math.floor(Math.random()*pass.length);
      GeneratePass+=pass[randNum]
    }
    setPassword(GeneratePass)
  }, [length,splcharactersAllowed,numbersAllowed])
  function copyText(){
    navigator.clipboard.writeText(password)
    document.querySelector("input").select()
  }
  return (
    <>
      <div className='flex justify-center h-[100vh] bg-slate-800 items-center'>
        <div className='bg-blue-400  flex flex-col items-center px-5 py-2 pb-5 gap-10 rounded-2xl'>
          <h1 className='text-3xl font-bold'>Password Generator</h1>
          <div>
            <input className='border-1 bg-slate-600 text-white outline-none px-3 py-2 ' type="text" value={password} readOnly/> <button onClick={copyText} className='bg-red-400 px-5 py-2 font-bolder text-xl rounded-xl active:bg-blue-400 hover:cursor-pointer'>Copy</button>
          </div>
          <div className='flex gap-5 text-2xl'>
            <div className=' bg-indigo-300 px-3 rounded-xl'>
              <input type="range" onChange={ChangeLength} value={length}/>
              <span className=''>{length}</span>
            </div>
            <div className=' bg-indigo-300 px-3 rounded-xl'>
              <input className='w-5 h-5 ' type="checkbox" onClick={()=> setNumbersAllowed(!numbersAllowed)} /> <span className=''>Number</span>
            </div>
            <div className=' bg-indigo-300 px-3 rounded-xl'>
              <input type="checkbox" className='w-5 h-5' onClick={()=> setSplcharactersAllowed(!splcharactersAllowed)} /> <span className=''>Characters</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
