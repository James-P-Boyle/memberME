import { useSelector } from "react-redux";

export default function UserCard() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="text-black px-3 py-2 rounded-md bg-gray-300 text-xl">
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>Test</p>
    </div>
  );
}
