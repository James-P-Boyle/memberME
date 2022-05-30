import { useSelector, useDispatch } from "react-redux";
import { setClicked } from "../redux/reducers/invite";
import { useState } from "react";

export default function InviteInput() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.invite.clicked);

  const handleAddUser = () => {};

  return (
    <div>
      <input
        className="bg-gray-200 rounded w-3/4 p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        placeholder="Email?"
        onChange={(e) => setEmail(e.target.value)}
      />
      <i
        onClick={handleAddUser}
        className="fa fa-send text-gray-300 hover:bg-gray-700 hover:text-green-400 p-2 rounded-md cursor-pointer"
      ></i>

      <i
        onClick={() => dispatch(setClicked(!clicked))}
        className="fa fa-times text-gray-300 hover:bg-gray-700 hover:text-red-400 p-2 rounded-md cursor-pointer"
      ></i>
    </div>
  );
}
