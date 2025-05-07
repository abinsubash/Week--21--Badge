import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice'

const ToolkitCounter = () => {
    const count = useSelector((state)=>state.podei.count)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        count:{count}
    </div>
    <button onClick={()=>dispatch(increment())}>incr</button>
    <button onClick={()=>dispatch(decrement())}>decr</button>
    </>
  )
}

export default ToolkitCounter