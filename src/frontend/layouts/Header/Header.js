import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNav, NavProfileDropdown } from "../../components";

const Header = () => {
  const [profileDropdownMenu, setProfileDropdownMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <nav className="z-20 sticky top-0 bg-white border-gray-200 px-2 md:px-0 lg:px-10 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex gap-3">
            <button onClick={() => setMobileNav(!mobileNav)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="self-center text-white h-5 w-5 lg:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Link to="/" className="flex items-center">
              <img
                src="/Logo/jurassic-world-logo-dark.svg"
                className="h-20"
                alt="Jurassic World Logo"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={() => setProfileDropdownMenu(!profileDropdownMenu)}
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                alt="avatar"
              />
            </button>

            {profileDropdownMenu && <NavProfileDropdown />}
          </div>
        </div>
      </nav>
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
    </>
  );
};

export { Header };
