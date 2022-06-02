import UserPanel from "./UserPanel";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="bg-white-400 dark:bg-gray-700 min-h-full">
      {isAuthenticated ? (
        <div className="md:grid md:grid-cols-8 gap-2 min-h-screen w-screen">
          <div className="h-screen hidden md:block fixed top-16 left-0 w-72 dark:border-gray-900 border-gray-100 border-r">
            <UserPanel />
          </div>

          <div className="col-span-4 col-start-4 md:m-5 py-2">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
