import React from 'react'
import { useParams } from 'react-router-dom'

export default function RecipeDetails() {


    const params = useParams()
    const {id} = params;

  return (
    <div>
      <h1>Recipe details page {id}</h1>
    </div>
  )
}
