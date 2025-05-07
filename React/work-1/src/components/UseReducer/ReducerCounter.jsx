import React, { useReducer } from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {
                count:state.count+1
            }
        case 'decrement':
            return {
                count:state.count-1
            }
        case 'multiply':
            return {
                count:state.count*2
            }
        default:
            return state
    }
}
const ReducerCounter = () => {
    const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <>
    <div>Count:{state.count}</div>
    <button onClick={()=>dispatch({type:'increment'})}>incr</button>
    <button onClick={()=>dispatch({type:'decrement'})}>dec</button>
    <button onClick={()=>dispatch({type:'multiply'})}>multiply</button>


    </>
  )
}

export default ReducerCounter