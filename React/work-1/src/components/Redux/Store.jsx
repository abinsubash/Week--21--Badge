import {createStore} from 'redux'

const initialState = {count:0}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'increment':
            return {
                count:state.count+1
            }
        case 'decrement':
            return {
                count:state.count-1
            }
        case 'multiplay':
            return {
                count:state.count*2
            }
        default:
            return state
            
    }
}
const store = createStore(reducer)
export default store
