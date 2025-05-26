import React from 'react'

export default React.memo(
    function Counter({countValue,onClick}) {

    console.log(countValue,onClick,"re-rendering")

  return (
    <div>
      <h4>{countValue}</h4>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
)  
