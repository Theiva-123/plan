import React from 'react'
import { useState } from 'react';



const Content = () => {


  const [name, setName] = useState ("dog")

  function handleNameChange(){
  const fire = ["fish","koli","crow"]
  const raj = Math.floor(Math.random()*3)
  setName(fire[raj])

  }

  const [count, setCount] = useState(0)

  function increament(){
    setCount (prevCount => prevCount+1)
  }
  function decrement(){
    setCount (prevCount => prevCount-1)
  }

  return (
    <>
   
   <div className='go'>
   
   <p>{name}</p>
   <button onClick={handleNameChange}>click</button>
   <button onClick={increament}>+</button>
   <span>{count}</span>
   <button onClick={decrement}>-</button>
   
   </div>
    </>
  )
}

export default Content