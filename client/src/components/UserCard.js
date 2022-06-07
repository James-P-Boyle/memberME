import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <div className="flex justify-between dark:bg-gray-800 pt-3">
      <div className="px-2 py-2 rounded-md text-xl flex flex-col items-center mx-auto">
        <div className="">
          {profile.profilePic ? (
            <NavLink to="/edit">
              <img
                src={profile.profilePic}
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />
            </NavLink>
          ) : (
            <NavLink to="/edit">
              <div className="flex items-center justify-center h-14 w-14 rounded-full">
                <FaUserAlt size={30} />
              </div>
            </NavLink>
          )}
        </div>
        <div className="text-lg p-1 w-full text-center">
          <p className="capitalize">{profile.userName}</p>
        </div>
      </div>
    </div>
  );
}
