import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Home from './Components/Home'
import Login from "./Components/Login";


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() 
{
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
