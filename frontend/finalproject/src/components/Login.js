import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const logIn = async (email, password) => {
    console.log(email, password);
    try {
      const { data } = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", data);
      const decoded = jwt_decode(data);
      localStorage.setItem("user", JSON.stringify(decoded));
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
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
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a
                href="/login"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
