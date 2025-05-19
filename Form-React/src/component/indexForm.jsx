import { use, useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  function handleInputChangeName(event) {
    const { value } = event.target;
    setNameValue(value);
  }

  function handleInputChangeEmail (event){
    const {value} = event.target;
    setEmailValue(value)
  }

  function handleOnSubmit(event){
    event.preventDefault()
    console.log(nameValue,emailValue)
  }


//   handle multiple state and functins in one method -1
const [formData,setFormData]=useState({
    name:'',
    email:''
})
function handleOnchange(event){
 console.log(event.target.name,"ooo")
 const {name,value}=event.target;
//  console.log([name],value)
//  setFormData({
//     ...formData,
//     [name]:value
//  })
 setFormData(prev=>({
    ...prev,
    [name]:value
 }))
}

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Hello Form</h2>
        <form onSubmit={handleOnSubmit}>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleOnchange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleOnchange}
        />
        <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
