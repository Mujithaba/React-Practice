import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Posts from './Pages/Posts.jsx'
import Details from './Pages/Details.jsx'

const routers = createBrowserRouter([

  {
    path:'/',
element:<Home/>
  },
  {
    path:'/posts',
    element:<Posts/>,
    
  },
  {
    path:'/posts/:id',
    element:<Details/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routers}/>
  </StrictMode>,
)
