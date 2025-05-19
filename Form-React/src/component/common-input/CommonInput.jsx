import React from "react";

export default function CommonInput({ label, name, id, placeholder, value, onChange ,type,componentType,option=[]}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {componentType=== "input" && (

          <input
            name={name}
            type={type || 'text'}
            id={id}
            placeholder={placeholder || "Enter the value"}
            value={value}
            onChange={onChange}
          />
      )}

      {componentType === "select" && (
        <select id={id} name={name} value={value} onChange={onChange}>
            <option value="" disabled>Select {label}</option>
            {option.map((opt)=>(
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
      )}

      {componentType === 'radio' && (
        
            option.map((opt)=>(
                <label key={opt.value} htmlFor={opt.name} style={{ marginRight: "10px" }}>
                <input value={opt.value} name={name} type={type} onChange={onChange} checked={value === opt.value}/>
                {opt.label}
                </label>
            ))
       
      )}

      {componentType === 'checkbox' && (

        option.map((opt)=>(
            <label htmlFor={name} style={{ marginRight: "10px" }}>{opt.label}
            <input value={opt.value} name={name} onChange={onChange} checked={value}/>
            </label>
        ))
        
      )}
    </div>
  );
}
