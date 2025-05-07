import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
const CounterRedux = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <>
    <div >Count:{count}</div>
    <button onClick={()=>{dispatch({type:'decrement'})}}>dec</button>
    <button onClick={()=>{dispatch({type:'increment'})}}> inc</button>
    <button onClick={()=>{dispatch({type:'multiplay'})}}> multiply</button>

    </>
  )
}

export default CounterRedux