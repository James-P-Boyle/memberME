import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/invite";
import { useState } from "react";
import axios from "axios";

export default function InviteInput() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.invite.clicked);

  const handleAddUser = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "http://localhost:4000/users/follow",
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setClicked(!clicked));
  };
  return (
    <div className="border p-1 rounded-xl">
      <form onSubmit={handleAddUser} className="py-1">
        <h1 className="px-1">Add follower</h1>
        <div className="flex p-1">
          <input
            className=" w-full pl-2 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300 focus:border-purple-500 border rounded-lg"
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
          <button className=" text-gray-300 hover:text-red-400 p-2 rounded-md cursor-pointer">
            <i onClick={handleClick} className="fa fa-times"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
