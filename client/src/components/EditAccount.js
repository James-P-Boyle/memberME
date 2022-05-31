import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
export default function EditAccount() {
  const user = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState("");

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
  };

  //update user using axios
  const updateUser = async () => {
    try {
      axios
        .put(
          "http://localhost:4000/users/edit",
          { profilePic },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="h-screen mt-20">
      <h1>Edit Account</h1>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="userImage">Profile Pic</label>
            <input
              type="file"
              id="userImage"
              name="userImage"
              onChange={(e) => urlConvert(e.target.files[0])}
            />
          </div>
          <div className="">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
