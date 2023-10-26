import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';  
import Layout from './Layout.js'
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js';
import Search from './Search.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Register' element={<Register/>}/>
    <Route path='Search' element={<Search/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
