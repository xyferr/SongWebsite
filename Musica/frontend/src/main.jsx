
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
=======
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';  
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx';
import Search from './Search';
>>>>>>> 33a3499958ac5859a5422dba6f6bcea21f8453fd


<<<<<<< HEAD
=======
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
>>>>>>> 33a3499958ac5859a5422dba6f6bcea21f8453fd





ReactDOM.createRoot(document.getElementById('root')).render
(
  <React.StrictMode>
  <Router>
  <App/>
  </Router>
    
  </React.StrictMode>,
)

