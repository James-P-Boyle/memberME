import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className="flex justify-between dark:bg-gray-800 md:mt-5">
      <div className="px-3 py-2 rounded-md text-xl flex flex-col items-center gap-2 mx-auto">
        <div className="border rounded-full">
          <NavLink to="/edit">
            <img
              src={profile.profilePic}
              alt=""
              className="h-14 w-14 rounded-full"
            />
          </NavLink>
        </div>
        <div className="text-lg p-1 w-full text-center">
          <p className="">{profile.userName}</p>
          <p>Email: {profile.email}</p>
        </div>
      </div>
    </div>
  );
}
