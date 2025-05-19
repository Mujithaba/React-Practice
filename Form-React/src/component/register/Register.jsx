import React, { useState } from "react";
import CommonForm from "../common-form";
import { registerFormControlData } from "../../config";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  country: "",
  gender: "",
};

export default function Register() {
  const [registerData, setRegisterData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(registerData.name, registerData);

    setRegisterData(initialFormData);
  }

  return (
    <div>
      <h2>Register component/page</h2>
      <CommonForm
        buttonType={"Register"}
        formData={registerData}
        onHandleSubmit={onHandleSubmit}
        setFormData={setRegisterData}
        formControls={registerFormControlData}
      />
    </div>
  );
}
