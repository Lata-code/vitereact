
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainScreen } from "./pages/MainScreen"

const App = ()=>{
  return (
      <>
      
      <BrowserRouter>
      {/* <Navbar /> */}
      
       <MainScreen />
      {/* <Footer /> */}
      </BrowserRouter>
     
      </>
  )
}

export default App