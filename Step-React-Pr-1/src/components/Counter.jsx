import React from 'react'
import useCount from '../hooks/useCount'

export default function Counter() {
    const {count,setCount}=useCount()
  return (
    <div>

        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
      
    </div>
  )
}
