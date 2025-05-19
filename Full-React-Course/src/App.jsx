import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ProductList from './components/products/ProductList'
import User from './components/products/User'
import Button from './contexApi/button'
import Text from './contexApi/Text'
import UseReducerHook from './useReducer/useReducer-hook'

function App() {

  const dummyData=['person 1','person 2','person 3']


  return (
    <>
    <h1>Hello, Welcome to the react course...</h1>
    {/* <ClassBasedComponent/> */}
    {/* <ProductList dummyData={dummyData} /> */}
    {/* <User/> */}
    {/* <Text/> */}
    {/* <Button/> */}
    <UseReducerHook/>
    </>
  )
}

export default App
