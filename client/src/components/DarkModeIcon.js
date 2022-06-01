import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/reducers/theme";

export default function DarkModeIcon() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  console.log(darkMode);
  return (
    <div
      className="text-white rounded-full h-10 w-10 bg-slate-100"
      onClick={() => {
        console.log("clicked");
        dispatch(toggleDarkMode());
      }}
    >
      {/*  <i className={darkMode ? "fa-solid fa-sun-bright" : "fa fa-moon"}></i> */}
    </div>
  );
}
