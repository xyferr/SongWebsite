
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import img2 from "./Images/google1.png"


const Login = () => {
  const navigate = useNavigate();

  
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData ={email,pass};
    try {
      const { data } = await axios.post("/login", {
       userData
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
      }
    } catch (error) {}
  };
  const check = () => {
    if (email === "" || pass === "") {
      alert("Enter all the details");
    }
  };
  return (
    <>
      <div className="body w-full h-screen items-center justify-center flex bg-emerald-50">
        <div className="main text-center flex bg-black w-96 rounded-2xl h-3/5 text-white z-10">
          <form
            onSubmit={handleSubmit}
            className="text-center flex flex-col items-center mt-6"
          >
            <label className="w-80 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-80 ml-7 rounded-2xl h-10 mb-3 text-black outline-none pl-2"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter you email"
            />
            <label className="w-80 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-80 ml-7 text-black rounded-2xl h-10 mb-10 outline-none pl-2"
              type="password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              placeholder="Enter you password"
            />
            <button
              onClick={check}
              className="w-80 ml-7  rounded-2xl bg-blue-600 h-11 text-center mb-8"
              type="submit"
            >
              Log In
            </button>
            <p className="text-xs mb-6 ml-3">Or continue with-</p>
            <div className="google relative">
              <img
                className="bg-blue-600 w-7 absolute left-14 text-center top-2"
                src={img2}
                alt=""
              />
              <button className="text-center w-80 ml-7 rounded-2xl bg-blue-600 h-11 mb-8">
                Continue with Google
              </button>
            </div>
            <Link to="/Register">
              <button className="ml-5 text-center text-xs hover:border-b">
                Don't have an account? Register here.
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
