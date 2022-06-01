import UserPanel from "./UserPanel";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="bg-white-400 dark:bg-gray-700 min-h-full">
      {isAuthenticated ? (
        <div className="md:grid md:grid-cols-8 gap-2 max-h-screen w-screen relative">
          <div className="h-screen hidden md:block fixed top-16 left-0 w-72 border-r-2 border-opacity-10">
            <UserPanel />
          </div>

          <div className="col-span-4 col-start-4 md:m-5">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
