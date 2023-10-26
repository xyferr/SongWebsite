import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const App = () => {
  const [currentForm, setcurrentForm] = useState("Login")
   
   const toggleForm=(updatePage)=>{
        setcurrentForm(updatePage);
   }
  return (
    <div>
     {
        currentForm==="Login" ? <Login formSwitch={toggleForm} /> : <Register formSwitch={toggleForm} />
     }
      
      
    </div>
  )
}

export default App