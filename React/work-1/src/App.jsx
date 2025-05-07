import  store  from "./components/Redux-toolkit/store"
// import store from "./components/Redux/Store"
import ReducerCounter from "./components/UseReducer/ReducerCounter"
import { Provider } from "react-redux"
import ToolkitCounter from "./components/Redux-toolkit/ToolkitCounter"
function App() {

  return (
    <>
    <Provider store={store}>
    <ToolkitCounter/>
    </Provider>
    </>
  )
}

export default App
