import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../redux/reducers/theme";
import Following from "./Following";

export default function FollowingContainer() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.theme.clicked);

  return (
    <div className="px-3 py-2 border dark:border-gray-600 rounded-xl">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-lg font-medium">Filter Feed</h1>
        <button className="text-xl text-gray-300 hover:text-red-400 p-2 rounded-md cursor-pointer">
          <i
            onClick={() => dispatch(setClicked(!clicked))}
            className="fa fa-times"
          ></i>
        </button>
      </div>

      <div className="flex w-full">
        <Following />
      </div>
    </div>
  );
}
