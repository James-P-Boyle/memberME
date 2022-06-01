import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/theme";
import { FaUsers } from "react-icons/fa";

export default function FollowingIcon() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.theme.clicked);
  return (
    <div
      onClick={() => dispatch(setClicked(!clicked))}
      className="flex gap-4 items-center text-xl"
    >
      <div className="rounded-md font-medium">
        <FaUsers />
      </div>

      <p className="text-xl">Following</p>
    </div>
  );
}
