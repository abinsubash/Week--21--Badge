import { createContext, useState } from "react";

export const CounterContext = createContext()
export const Myprovider = ({children})=>{
    const [value,setValue] = useState(0)
    return (
        <CounterContext.Provider value={{value,setValue}}>
            {children}
        </CounterContext.Provider>
    )
}