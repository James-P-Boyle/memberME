import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollower } from "../redux/reducers/posts";
import { setMobileMenuOpen } from "../redux/reducers/theme";

export default function FollowerAvatar({ follower }) {
  const [active, setActive] = useState(false);
  const openMenu = useSelector((state) => state.theme.mobileMenuOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <div
        key={follower.id}
        className="rounded-full capitalize cursor-pointer transition duration-100 ease-in-out"
      >
        <img
          src={follower.profilePic}
          alt=""
          onClick={() => {
            setActive(!active);
            dispatch(toggleFollower(follower._id));
            dispatch(setMobileMenuOpen(!openMenu));
          }}
          className={`${
            active
              ? "duration-100 ease-in-out scale-125 border-2 dark:border-gray-600 border-gray-400"
              : ""
          } h-10 w-10 rounded-full border dark:border-gray-700 border-gray-300`}
        />
      </div>
      <span className="text-sm">{follower.userName}</span>
    </div>
  );
}
