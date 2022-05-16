import { Routes, Route } from "react-router-dom";
//COMPONENTS
import UploadImage from "./components/UploadImage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-yellow-500 m-2">
      <Navbar />
      <Routes>
        <Route path="/upload" element={<UploadImage />} />
      </Routes>
    </div>
  );
}

export default App;
