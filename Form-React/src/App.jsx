import { useState } from "react"
import FormComponent from "./component/indexForm"
import Login from "./component/login/Login"
import Register from "./component/register/Register"


function App() {
  

  return (
    <>
      {/* <FormComponent/> */}
      <div style={{display:'flex', gap:'400px', padding:'20px'}}>
        <Login/>
        <Register/>
      </div>
    </>
  )
}

export default App
