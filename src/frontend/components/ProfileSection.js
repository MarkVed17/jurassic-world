import React from "react";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex p-2 gap-5">
      <img
        className="w-24 h-24 rounded-full sm:w-28 sm:h-28"
        src={user.avatar}
        alt="User Avatar"
      />
      <div className="flex flex-col gap-2 font-medium dark:text-white">
        <div className="name-credentials">
          <p className="font-bold text-lg md:text-2xl lg:text-3xl ">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{user.username}
          </p>
        </div>
        <p className="text-md font-normal lg:text-lg">{user.bio}</p>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-sky-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            />
          </svg>
          <a
            href="https://vedantlahane.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-light text-sky-600 hover:underline"
          >
            {user.website}
          </a>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p className="text-sm font-bold sm:text-md">10</p>
            <p className="text-sm font-light dark:text-gray-400 sm:text-md">
              Following
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-sm font-bold sm:text-md">10</p>
            <p className="text-sm font-light dark:text-gray-400 sm:text-md">
              Followers
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="self-start text-xs text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-2.5 py-1.5 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 sm:text-sm sm:px-5 sm:py-2.5"
      >
        Edit
      </button>
    </div>
  );
};

export { ProfileSection };
