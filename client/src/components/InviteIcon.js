import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/invite";

export default function InviteIcon() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.invite.clicked);
  return (
    <div className="text-4xl">
      <i
        onClick={() => dispatch(setClicked(!clicked))}
        className="fa fa-user-plus ml-1 px-3 py-2 rounded-md font-medium cursor-pointer"
      ></i>
    </div>
  );
}
