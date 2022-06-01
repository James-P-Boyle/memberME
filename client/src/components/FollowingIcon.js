import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/theme";

export default function FollowingIcon() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.theme.clicked);
  return (
    <div
      onClick={() => dispatch(setClicked(!clicked))}
      className="flex gap-6 items-center text-4xl hover:dark:bg-gray-800 cursor-pointer"
    >
      <i className="fa fa-user-plus px-3 py-3 rounded-md font-medium"></i>
      <p className="text-xl">Following</p>
    </div>
  );
}
