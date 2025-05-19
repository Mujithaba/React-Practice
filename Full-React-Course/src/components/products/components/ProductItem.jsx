import React from 'react'


function ButtonFun(){
  return <button>Click me</button>
}

export default function ProductItem({item,index}) {
  return (
    <div key={index}>
      <p >{item}</p>
      <ButtonFun/>
    </div>
  )
}
