import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);

  console.log(profile.following);
  return (
    <div className="flex justify-between bg-gray-100 dark:bg-gray-800 pt-3 mb-2">
      <div className="px-2 py-2 rounded-md text-xl flex flex-col items-center gap-2 mx-auto">
        <div className="">
          {profile.profilePic ? (
            <NavLink to="/edit">
              <img
                src={profile.profilePic}
                alt=""
                className="h-12 w-12 object-cover rounded-full border dark:border-gray-700 border-gray-300"
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
          <p className="">{profile.userName}</p>
          <p>Email: {profile.email}</p>
        </div>
      </div>
    </div>
  );
}
