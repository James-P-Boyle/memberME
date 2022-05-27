import UserPanel from "./UserPanel";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="md:grid md:grid-cols-8 gap-2 max-h-screen w-screen relative">
        <div className="h-screen shadow-2xl hidden md:block fixed top-16 left-0 right-2/3">
          <UserPanel />
        </div>

        <div className="col-span-4 col-start-4 m-2 md:m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
