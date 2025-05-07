import React, { useContext, useState } from 'react'
import { CounterContext } from './Context'
import InputFocus from './InputFocus'

const Counter = () => {
  const {value,setValue} = useContext(CounterContext)
  return (
    <>
<InputFocus/>
    <div onClick={()=>setValue((prev)=>(prev+1))}>Counter:{value}</div>
    </>
  )
}

export default Counter