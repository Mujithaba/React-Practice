export const loginFormControlData = [
  {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    componentType: "input",
    label: "Email",
  },
  {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    componentType: "input",
    label: "Password",
  },
];

export const registerFormControlData = [
  {
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Enter Your Name",
    componentType: "input",
    label: "Name",
  },
  {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Enter Your Email",
    componentType: "input",
    label: "Email",
  },
  {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Enter Your Password",
    componentType: "input",
    label: "Password",
  },
  {
    name: "country",
    id: "country",
    componentType: "select",
    label: "Country",
    option: [
      { label: "America", value: "USA" },
      { label: "INDIA", value: "IN" },
      { label: "Australia", value: "AUS" },
    ],
  },
  {
    name: "gender",
    id: "gender",
    componentType: "radio",
    type: "radio",
    label: "Gender",
    option:[
        {label:'Male',value:'male'},
        {label:'Female',value:'female'},
        {label:'Other',value:'other'}
    ]
  },
  


];
