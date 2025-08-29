import { Outlet } from "react-router-dom"
import Home from "./components/Home"
import { Navbers } from "./components/Navbers"
  
 function App() {
  return  (
    <>
    <Navbers></Navbers>
    
    <Outlet></Outlet>
    </>
  )
}

export default App