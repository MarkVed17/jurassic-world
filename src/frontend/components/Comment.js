import React from "react";

const Comment = () => {
  return (
    <div className="flex items-center gap-3 py-4 px-4 rounded bg-gray-50 dark:bg-gray-700">
      <img
        className="w-10 h-10 rounded-full self-start dark:bg-gray-700"
        src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
        alt=""
      />
      <div className="flex flex-col gap-y-2 bg-gray-50 dark:bg-gray-700">
        <div className="name-credentials">
          <p className="font-semibold dark:text-white">Vedant Lahane</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @username
          </p>
        </div>
        <p className="text-base text-gray-800 font-normal bg-gray-50 dark:bg-gray-700 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export { Comment };
