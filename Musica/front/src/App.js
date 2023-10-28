import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Search from "./Search"


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Search' element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
