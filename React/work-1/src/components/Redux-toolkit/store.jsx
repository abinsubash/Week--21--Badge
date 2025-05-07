import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './slice'
 const store = configureStore({
    reducer:{
        podei:CounterReducer
    }
})
export default store