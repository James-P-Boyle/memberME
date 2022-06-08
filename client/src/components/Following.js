import { useSelector } from "react-redux";
import FollowerAvatar from "./FollowerAvatar";

export default function Following() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className="flex flex-wrap md:gap-2 gap-6 justify-center">
      <FollowerAvatar follower={profile} />
      {profile
        ? profile.following.map((follower, index) => {
            return <FollowerAvatar key={index} follower={follower} />;
          })
        : null}
    </div>
  );
}
