import { Routes, Route } from "react-router-dom";
//COMPONENTS
import UploadImage from "./components/UploadImage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
