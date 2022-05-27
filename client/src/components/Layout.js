import UserPanel from "./UserPanel";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "../components/SignUp";

export default function Layout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <div>
      {isAuthenticated ? (
        <div className="md:grid md:grid-cols-8 gap-2 max-h-screen w-screen relative">
          <div className="h-screen shadow-2xl hidden md:block fixed top-16 left-0 right-2/3">
            <UserPanel />
          </div>

          <div className="col-span-4 col-start-4 m-1 md:m-5">
            <Outlet />
          </div>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
}
