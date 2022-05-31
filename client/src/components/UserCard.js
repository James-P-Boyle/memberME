import { useSelector } from "react-redux";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className="text-black px-3 py-2 rounded-md bg-gray-300 text-xl flex items-center gap-4 max-w-xl mx-auto">
      <div className="">
        <img
          src={profile.profilePic}
          alt=""
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="text-lg">
        <p>{profile.userName}</p>
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
}
