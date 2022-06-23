import React from "react";

const SuggestedUsersCard = () => {
  return (
    <div className="hidden sticky top-20 p-4 max-w-md h-full bg-white rounded border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 lg:block">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Suggested
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Vedant Lahane
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Vedant Lahane
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Vedant Lahane
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Vedant Lahane
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
                  alt="User Avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Vedant Lahane
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SuggestedUsersCard };
