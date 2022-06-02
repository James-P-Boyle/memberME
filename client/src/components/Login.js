import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { authenticate } from "../redux/reducers/auth";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const logIn = async (email, password) => {
    try {
      const { data } = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", data);
      const decoded = jwt_decode(data);
      dispatch(authenticate({ token: data, user: decoded }));
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="px-8 py-6 mt-4 text-left bg-white text-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold text-center">Log In</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="password">Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <button className="px-4 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500">
                    <i className="fa fa-sign-in ml-1"></i> Login
                  </button>
                  <a href="/login" className="text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
