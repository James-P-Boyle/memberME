import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { Transition } from "@headlessui/react";
import InviteIcon from "../components/InviteIcon";
import InviteInput from "../components/InviteInput";
import LogOutButton from "../components/LogOutButton";
import FollowingContainer from "./FollowingContainer";

export default function MobileMenu({ isOpen }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const clicked = useSelector((state) => state.invite.clicked);

  return (
    <div>
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
            <div
              ref={ref}
              className="px-1 py-4 pb-3 space-y-1 sm:px-3 flex flex-col min-w-full text-center"
            >
              <div className="">
                <UserCard />
                {clicked ? (
                  <>
                    <InviteIcon />
                  </>
                ) : (
                  <div className="px-2">
                    <InviteInput></InviteInput>
                  </div>
                )}
              </div>

              <FollowingContainer />

              <div className="flex">
                {!isAuthenticated ? (
                  <>
                    <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                      <i className="fa fa-sign-in ml-1"></i> Login
                    </NavLink>
                    <NavLink
                      to="/signup"
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
