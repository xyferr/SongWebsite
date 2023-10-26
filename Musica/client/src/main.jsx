import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';  
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx';
import Search from './Search';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"Login",
//         element:<Login />
//       },
//       {
//         path:"Register",
//         element:<Register />
//       }
//     ]
//   }
// ])

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
