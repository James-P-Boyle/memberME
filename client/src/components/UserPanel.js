import UserCard from "./UserCard";

export default function UserPanel() {
  return (
    //MAKE CUSTOM CSS CLASSES
    <div className="flex flex-col justify-between ronded-xl">
      <div className="">
        <UserCard />
      </div>
    </div>
  );
}
