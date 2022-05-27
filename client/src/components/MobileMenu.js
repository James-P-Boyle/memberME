import Upload from "../components/Upload";
import UserCard from "../components/UserCard";
import { Transition } from "@headlessui/react";

export default function MobileMenu({ isOpen }) {
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
              className="px-2 py-4 pb-3 space-y-1 sm:px-3 flex flex-col min-w-full text-center"
            >
              <div className="">
                <UserCard />
              </div>

              <Upload />

              <div className="flex">
                <a
                  href="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
