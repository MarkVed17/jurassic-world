import React from "react";
import { Link } from "react-router-dom";

const NavProfileDropdown = () => {
  return (
    <div className="absolute top-[50px] right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <div className="z-50 py-3 px-4">
        <span className="block text-sm text-gray-900 dark:text-white">
          Vedant Lahane
        </span>
        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
          @username
        </span>
      </div>
      <ul className="py-1">
        <li>
          <Link
            to="/profile"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { NavProfileDropdown };
