import { useSelector } from "react-redux";

export default function UserCard() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="text-black px-3 py-2 rounded-md text-xl flex items-center gap-4 max-w-xl mx-auto">
      <div className="">
        <img src={user.profilePic} alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="text-lg">
        <p>{user.userName}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
