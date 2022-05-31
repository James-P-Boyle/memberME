import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/invite";

export default function InviteIcon() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.invite.clicked);
  return (
    <div>
      <i
        onClick={() => dispatch(setClicked(!clicked))}
        className="fa fa-user-plus ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"
      ></i>
    </div>
  );
}
