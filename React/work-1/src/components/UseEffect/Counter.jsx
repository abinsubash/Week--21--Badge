import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter1,setCounter1] = useState(20)
    const [counter2,setCounter2] = useState(0)
    useEffect(()=>{
        setCounter1(prev=>(prev-1))
    },[counter2])
  return (
    <>
    <div>
        <div>counter1:{counter1}</div>
        <div onClick={()=>setCounter2(prev=>(prev+1))}>counter2:{counter2}</div>
    </div>
    </>
  )
}

export default Counter