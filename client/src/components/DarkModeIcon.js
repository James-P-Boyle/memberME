import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/reducers/theme";
import { FaSun, FaMoon } from "react-icons/fa";
export default function DarkModeIcon() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className="text-white rounded-full"
      onClick={() => {
        console.log("clicked");
        dispatch(toggleDarkMode());
      }}
    >
      {darkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
    </div>
  );
}
