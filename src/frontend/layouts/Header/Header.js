import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNav, NavProfileDropdown } from "../../components";
import { useSelector } from "react-redux";
const Header = () => {
  const [profileDropdownMenu, setProfileDropdownMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="z-20 sticky top-0 bg-white border-b border-gray-100 px-2 md:px-0 lg:px-10 dark:bg-gray-800 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex gap-3">
            {isAuth && (
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
            )}

            <Link to="/" className="flex items-center">
              <img
                src="/Logo/jurassic-world-logo-dark.svg"
                className="h-20"
                alt="Jurassic World Logo"
              />
            </Link>
          </div>

          <div className="flex items-center">
            {isAuth ? (
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                onClick={() => setProfileDropdownMenu(!profileDropdownMenu)}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={
                    user.avatarURL === null
                      ? `https://ui-avatars.com/api/?name=${isAuth?.user?.user.firstName}+${isAuth?.user?.user.lastName}?format=svg`
                      : user.avatarURL
                  }
                  alt="avatar"
                />
              </button>
            ) : (
              <div className="flex gap-4">
                <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                  <Link to="/signin">Sign In</Link>
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </div>
            )}

            {profileDropdownMenu && (
              <NavProfileDropdown
                setProfileDropdownMenu={setProfileDropdownMenu}
              />
            )}
          </div>
        </div>
      </nav>
      {mobileNav && <MobileNav setMobileNav={setMobileNav} />}
    </>
  );
};

export { Header };
