import { Routes, Route } from "react-router-dom";
//COMPONENTS
import UploadImage from "./components/UploadImage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Memory from "./components/Memory";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memory/:id" element={<Memory />} />
      </Routes>
    </div>
  );
}

export default App;
