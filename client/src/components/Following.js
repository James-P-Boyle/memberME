import { useSelector } from "react-redux";

export default function Following() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <>
      {profile
        ? profile.following.map((follower, index) => {
            return (
              <div key={index} className="flex items-center gap-2 my-1">
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
            );
          })
        : null}
    </>
  );
}
