import React, { useContext, useEffect, useRef } from 'react'
import { CounterContext } from './Context'

const InputFocus = () => {
  const {value,setValue}  = useContext(CounterContext)
  const ref = useRef(null)
  useEffect(()=>{
    ref.current.style.backgroundColor= ref.current.style.backgroundColor=='white'?'black':ref.current.style.backgroundColor=='black'?'red':'white'
  },[value])
  return (
  <>
  <div ref={ref} style={{width:'100px',height:'100px'}}>
  <input  type="text"  />
  </div>
  </>
  )
}

export default InputFocus