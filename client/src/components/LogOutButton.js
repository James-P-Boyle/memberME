import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LogOutButton() {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <div>
      <NavLink
        to="/"
        onClick={logout}
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3
        py-2 rounded-md text-base"
      >
        Logout
      </NavLink>
    </div>
  );
}
