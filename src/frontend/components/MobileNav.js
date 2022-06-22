import React from "react";
import { Link, NavLink } from "react-router-dom";

const MobileNav = ({ setMobileNav }) => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "flex items-center p-2 text-lg font-normal text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700"
      : "flex items-center p-2 text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";

  return (
    <nav
      id="mobile-navigation"
      className="fixed top-0 right-0 bottom-0 left-0 z-30"
    >
      <ul className="flex flex-col gap-4 absolute top-0 left-0 bottom-0 w-10/12 px-4 bg-white drop-shadow-2xl z-10 transition-all dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/Logo/jurassic-world-logo-dark.svg"
              className="h-20"
              alt="Jurassic World Logo"
            />
          </Link>

          <button
            className="z-50 dark:text-white h-fit p-1 rounded-full dark:text-white hover:bg-gray-500"
            onClick={() => setMobileNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <li onClick={() => setMobileNav(false)}>
            <NavLink to="/" className={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="ml-3">Feed</span>
            </NavLink>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <NavLink to="/explore" className={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Explore</span>
            </NavLink>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <NavLink to="/bookmarks" className={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Bookmarks</span>
            </NavLink>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <NavLink to="/profile" className={linkStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export { MobileNav };
