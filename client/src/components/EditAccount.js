import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditAccount() {
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const urlConvert = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    navigate("/");
  };

  //update user using axios
  const updateUser = async () => {
    try {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/users/edit`,
          { profilePic },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-6 mt-4 text-left dark:bg-gray-800 bg-white text-gray-700 shadow-lg">
        <h3 className="text-2xl font-bold text-center dark:text-white">
          Add Your Profile Pic
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 w-full">
            <div className="dark:border-gray-300 rounded-xl p-2">
              <input
                type="file"
                id="userImage"
                name="userImage"
                className=""
                onChange={(e) => urlConvert(e.target.files[0])}
              />
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500">
                <i className="ml-1"></i> Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
