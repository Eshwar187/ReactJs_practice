import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue=(e)=>{
    if(counter>=20){
      e.preventDefault()

    }else{
      setCounter(counter+1)
    }
  }
  const subValue=(e)=>{
    if(counter<=0){
      e.preventDefault()
    }else{
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>Hello My name is Eshwar</h1>
      <h3>Count {counter}</h3>
      <button onClick={addValue}>Increase Value </button>
      <br />
      <br />
      <button onClick={subValue}>Decrease Value </button>
     
    </>
  )
}

export default App
