import React from 'react'
import {Link} from 'react-router-dom'
import logo from "./Images/MUSICA1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login'
import Home from '../Home'

const Header = () => {
  return (
    <>
        <div className="main h-20 bg-zinc-300 text-black w-full flex items-center justify-evenly">
           <Link to="/">
              <img className='w-32 ' src={logo} alt="" />
           </Link>
           <div className="search flex items-center">
           <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input className='h-10 rounded w-full' type="text" />
           </div>
           <Link>
              <Login />
           </Link>
           <Link>
              <Home />
           </Link>
        </div>
    </>
  )
}

export default Header