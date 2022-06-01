import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className="flex flex-col justify-between rounded-xl border ">
      <div className="px-3 py-2 rounded-md text-xl flex items-center gap-4 max-w-xl">
        <div className="">
          <NavLink to="/edit">
            <img
              src={profile.profilePic}
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </NavLink>
        </div>
        <div className="text-lg text-left border p-1 w-full">
          <p className="">{profile.userName}</p>
          <p>Email: {profile.email}</p>
        </div>
      </div>
    </div>
  );
}
