import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>This page does not exist</h1>
      <Link to={'/home/recipe-list'}>
      Go to Recipe list page
      </Link>
    </div>
  )
}
