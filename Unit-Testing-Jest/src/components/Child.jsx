import React from 'react'
import { useState } from 'react'

export default function Child({count}) {

    const [theme,setTheme] = useState(false)

  return (
    <div>
      <p data-testid="props-count">{count}</p>
      <button onClick={()=>setTheme(!theme)} data-testid="click-to-toggle">Click Toggle</button>
      <h2>{theme ? 'true':'false'}</h2>
    </div>
  )
}
