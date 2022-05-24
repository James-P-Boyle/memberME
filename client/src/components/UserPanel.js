export default function UserPanel() {
  return (
    //MAKE CUSTOM CSS CLASSES
    <div className=" w-full flex flex-col justify-between bg-yellow-400">
      <div className="">
        <div className=" text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
          <h1>UserName</h1>
        </div>
        <div className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
          <h1>MyTimelines</h1>
        </div>
        <div className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer">
          <h1>Following</h1>
        </div>
      </div>
      <div className="border-2 p-1 m-1">NOTIFICATIONS</div>
      <div className="border-2 p-1 m-1">Box for updating content</div>
    </div>
  );
}
