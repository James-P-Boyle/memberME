import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MobileMenu from "./MobileMenu";
import DarkModeIcon from "./DarkModeIcon";
import { setMobileMenuOpen } from "../redux/reducers/theme";

export default function Navbar() {
  const isOpen = useSelector((state) => state.theme.setMobileMenuOpen);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="bg-gray-700 dark:bg-gray-800 fixed inset-x-0 top-0 lg:text-xl z-10 px-10 md:px-32">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/">
            <img
              className="h-8 w-8 lg:h-10 lg:w-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </NavLink>
          {/* logo */}

          <div className="flex items-center">
            <div className="flex-shrink-0 flex">
              {!isAuthenticated ? (
                <>
                  <NavLink
                    to="/login"
                    className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 mx-1 rounded-md font-medium cursor-pointer"
                  >
                    Login <i className="fa fa-sign-in ml-1"></i>
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"
                  >
                    Signup
                  </NavLink>
                </>
              ) : (
                <div className="flex items-center">
                  <DarkModeIcon />
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => dispatch(setMobileMenuOpen(!isOpen))}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <MobileMenu />
      </nav>
    </div>
  );
}
