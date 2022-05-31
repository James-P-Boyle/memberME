import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);

  console.log(profile.following);
  return (
    <div className="flex flex-col justify-between rounded-xl border">
      <div className="text-black px-3 py-2 rounded-md bg-gray-300 text-xl flex items-center gap-4 max-w-xl">
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
          <>
            {profile
              ? profile.following.map((follower) => (
                  <div className="flex items-center gap-2 my-1">
                    {follower.profilePic ? (
                      <img
                        src={follower.profilePic}
                        alt=""
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gray-600"></div>
                    )}
                    <p>{follower.email}</p>
                  </div>
                ))
              : null}
          </>
        </div>
      </div>
    </div>
  );
}
