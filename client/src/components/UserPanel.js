import Upload from "./Upload";
import UserCard from "./UserCard";
export default function UserPanel() {
  return (
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between ronded-xl">
      <div className="">
        <div className="">
          <UserCard />
        </div>
        <Upload />

        <div className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
          <h1>Following</h1>
        </div>
      </div>
      <div className="border-2 p-1 m-1">NOTIFICATIONS</div>
      <div className="border-2 p-1 m-1">Box for updating content</div>
    </div>
  );
}
