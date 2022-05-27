import { useState } from "react";
import Upload from "./Upload";
import UserCard from "./UserCard";

export default function UserPanel() {
  const [open, setOpen] = useState(false);
  return (
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between ronded-xl">
      <div className="">
        <UserCard />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
      >
        <h1>Upload</h1>

        {open && <Upload setOpen={setOpen} open={open} />}
      </div>
    </div>
  );
}
