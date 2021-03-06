import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/invite";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function InviteInput() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.invite.clicked);

  const handleAddUser = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/users/follow`,
          {
            email: email,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
      dispatch(setClicked(!clicked));
      toast("Follower Added", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setClicked(!clicked));
  };
  return (
    <div className="border dark:border-gray-600 py-1 px-3 rounded-xl mx-2">
      <form onSubmit={handleAddUser} className="py-1">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Add follower</h1>
          <button className="text-gray-300 text-xl hover:text-red-400 p-2 rounded-md cursor-pointer">
            <i onClick={handleClick} className="fa fa-times"></i>
          </button>
        </div>

        <div className="flex p-1">
          <input
            className=" w-full pl-2 dark:border-gray-600 dark:bg-gray-700 text-gray-600 leading-tight focus:outline-none dark:focus:bg-gray-200 border rounded-lg"
            type="text"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className=" text-gray-300 hover:text-green-400 p-2 rounded-md cursor-pointer"
          >
            <i className="fa fa-send"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
