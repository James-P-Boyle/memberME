import { useSelector } from "react-redux";

export default function UserCard() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className="flex flex-col justify-between rounded-xl border">
      <div className="text-black px-3 py-2 rounded-md bg-gray-300 text-xl flex items-center gap-4 max-w-xl">
        <div className="">
          <img
            src={profile.profilePic}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="text-lg text-left border p-1">
          <p className="">{profile.userName}</p>
          <p>Email: {profile.email}</p>
        </div>
      </div>
    </div>
  );
}
