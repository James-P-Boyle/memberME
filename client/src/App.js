import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

//COMPONENTS
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Posts from "./components/PostComponents/Posts";
import Layout from "./components/Layout";
import EditAccount from "./components/EditAccount";

function App() {
  const toggleDark = useSelector((state) => state.theme.darkMode);

  return (
    <div className={toggleDark ? "dark" : ""}>
      <div className="bg-white-400 dark:bg-gray-700 text-gray-800 dark:text-white">
        <Navbar />
        <Routes>
          {/* //everything is inside in the 2 col layout*/}
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<EditAccount />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
