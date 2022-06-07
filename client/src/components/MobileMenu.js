import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { Transition } from "@headlessui/react";
import InviteIcon from "../components/InviteIcon";
import InviteInput from "../components/InviteInput";
import LogOutButton from "../components/LogOutButton";
import FollowingContainer from "./FollowingContainer";
import { setMobileMenuOpen } from "../redux/reducers/theme";

export default function MobileMenu() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isOpen = useSelector((state) => state.theme.mobileMenuOpen);
  const clicked = useSelector((state) => state.invite.clicked);

  const dispatch = useDispatch();

  return (
    <div className="text-white">
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="md:hidden min-h-screen flex justify-center"
            id="mobile-menu"
          >
            <div className="px-1 py-4 pb-3 space-y-1 sm:px-3 flex flex-col min-w-full text-center">
              {isAuthenticated ? (
                <>
                  <div className="">
                    <UserCard />
                    {clicked ? (
                      <>
                        <InviteIcon />
                      </>
                    ) : (
                      <div className="px-1">
                        <InviteInput></InviteInput>
                      </div>
                    )}
                  </div>

                  <div className="px-2">
                    <FollowingContainer />
                  </div>
                </>
              ) : (
                "Please login or singup to see your profile"
              )}

              <div className="flex justify-center">
                {!isAuthenticated ? (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => dispatch(setMobileMenuOpen(!isOpen))}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                      <i className="fa fa-sign-in ml-1"></i> Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      onClick={() => dispatch(setMobileMenuOpen(!isOpen))}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                      <i className="fa fa-user-plus ml-1"></i> Signup
                    </NavLink>
                  </>
                ) : (
                  //Log the user out when clicked and navigate to login page
                  <>
                    <LogOutButton />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
