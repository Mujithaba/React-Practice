import React, { useState } from 'react'
import CommonForm from '../common-form'
import { loginFormControlData } from '../../config'

const initialFormData={
        email:'',
        password:''
    }

export default function Login() {
    const [loginFormData,setLoginFormData]= useState(initialFormData)

     function onHandleSubmit(event){
        event.preventDefault()
    // alert(loginFormData)
console.log(loginFormData)
setLoginFormData(initialFormData)
  }

  return (
    <div>
      <h2>Login component / page</h2>
      <CommonForm   onHandleSubmit={onHandleSubmit} buttonType={"Login"} formControls={loginFormControlData} formData={loginFormData} setFormData={setLoginFormData}/>
    </div>
  )
}
