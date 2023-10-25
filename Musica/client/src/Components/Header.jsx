
import { Link } from 'react-router-dom'
import logo from "./Images/MUSICA1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
        <div className="main h-20 bg-black text-black w-full flex items-center justify-evenly">
           <div className="nav-left w-2/4">
             <Link to="/">
              <img className='w-32 ml-12' src={logo} alt="" />
             </Link>
           </div>
           <div className="nav-right flex items-center w-3/5 justify-evenly">
             <div className="search flex items-center">
                <FontAwesomeIcon className='text-center bg-white h-10 w-5 rounded-s-3xl pl-4' icon={faMagnifyingGlass} />
                <input className='h-10 rounded-e-3xl w-96 border-none outline-none pl-1' type="text" />
             </div>
             <Link to="/">
                <div className='text-white font-medium'>HOME</div>
             </Link>
             <Link to="/login">
                <div className='text-black pr-3 pl-3 pt-2 pb-2 bg-white rounded-2xl font-medium'>LOGIN</div>
             </Link>
           </div>
        </div>
    </>
  )
}

export default Header