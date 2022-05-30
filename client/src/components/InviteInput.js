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

  return (
    <div className="">
      <form onSubmit={handleAddUser} action="flex flex-row">
        <input
          className="bg-gray-200 rounded p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Email?"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className=" text-gray-300 hover:bg-gray-700 hover:text-green-400 p-2 rounded-md cursor-pointer"
        >
          <i className="fa fa-send"></i>
        </button>
        <button className=" text-gray-300 hover:bg-gray-700 hover:text-red-400 p-2 rounded-md cursor-pointer">
          <i
            onClick={() => dispatch(setClicked(!clicked))}
            className="fa fa-times"
          ></i>
        </button>
      </form>
    </div>
  );
}
