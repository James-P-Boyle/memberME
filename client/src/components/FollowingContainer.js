import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/theme";

export default function FollowingContainer() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.theme.clicked);

  return (
    <div className="">
      <div>FOLLOWER</div>
      <i
        onClick={() => dispatch(setClicked(!clicked))}
        className="fa fa-user-plus ml-1 px-3 py-2 rounded-md font-medium cursor-pointer"
      ></i>
    </div>
  );
}
