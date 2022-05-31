export default function UserCard({ userInfo, user }) {
  return (
    <div className="text-black px-3 py-2 rounded-md bg-gray-300 text-xl flex items-center gap-4 max-w-xl mx-auto">
      <div className="">
        <img
          src={userInfo.profilePic}
          alt=""
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="text-lg">
        <p>{userInfo.userName}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
