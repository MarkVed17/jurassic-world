import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../features";
import {
  JURASSIC_WORLD_AUTH_TOKEN,
  JURASSIC_WORLD_USER_INFO,
} from "../constants";
import toast from "react-hot-toast";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const NavProfileDropdown = ({ setProfileDropdownMenu }) => {
  const {
    isAuth,
    user: { firstName, lastName, username },
  } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(signout());
    localStorage.removeItem(JURASSIC_WORLD_AUTH_TOKEN);
    localStorage.removeItem(JURASSIC_WORLD_USER_INFO);
    navigate("/");
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setProfileDropdownMenu(false));

  return (
    <div ref={ref} className="absolute top-[50px] right-0 z-50 my-4 text-base list-none bg-white rounded border divide-y divide-gray-200 shadow dark:bg-gray-700 dark:divide-gray-600 dark:border-gray-600">
      {isAuth && (
        <div className="z-50 py-3 px-4 text-center">
          <span className="block text-sm text-gray-900 dark:text-white">
            {firstName} {lastName}
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            @{username}
          </span>
        </div>
      )}
      <ul className="py-1">
        <li>
          <Link
            to={`/profile/${username}`}
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={() => {
              navigate(`profile/${username}`);
              setProfileDropdownMenu(false);
            }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={() => {
              signOutHandler();
              setProfileDropdownMenu(false);
              toast.success("Logged out!", {
                style: {
                  background: "#22c55e",
                  color: "#FFFFFF",
                },
              });
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { NavProfileDropdown };
