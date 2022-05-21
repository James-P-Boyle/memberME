import Posts from "./Posts";
import UserPanel from "./UserPanel";
import UploadImage from "./UploadImage";
export default function Feed() {
  return (
    <div>
      <div className="w-1/6 pt-20 h-screen hidden lg:block lg:fixed shadow-2xl">
        <UserPanel />
      </div>
      <div className="lg:w-5/6 ml-auto flex justify-center">
        <div className=" max-w-8xl">
          <UploadImage />
          <Posts />
        </div>
      </div>
    </div>
  );
}
