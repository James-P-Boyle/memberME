import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/reducers/theme";
import { FaSun, FaMoon } from "react-icons/fa";
export default function DarkModeIcon() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className="text-gray-300 hover:text-gray-100 opacity-60 hover:opacity-30 rounded-full cursor-pointer"
      onClick={() => {
        localStorage.setItem("darkMode", !darkMode);
        dispatch(toggleDarkMode());
      }}
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </div>
  );
}
