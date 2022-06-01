import { useSelector, useDispatch } from "react-redux";

export default function DarkModeIcon() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    console.log("clicked");
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };
  return (
    <div
      className="text-white rounded-full h-10 w-10 bg-slate-100"
      onClick={toggleDarkMode}
    >
      {/*  <i className={darkMode ? "fa-solid fa-sun-bright" : "fa fa-moon"}></i> */}
    </div>
  );
}
