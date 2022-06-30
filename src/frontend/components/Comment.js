import React from "react";
import { useNavigate } from "react-router-dom";

const Comment = ({ postId, comment }) => {
  const navigate = useNavigate();
  const { firstName, lastName, username, avatarURL, text } = comment;

  return (
    <div className="flex items-center gap-3 py-4 px-4 rounded bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-10 h-10 rounded-full self-start dark:bg-gray-700 hover:cursor-pointer"
        src={avatarURL}
        alt="User Avatar"
        onClick={() => {
          navigate(`/profile/${username}`);
        }}
      />
      <div className="flex flex-col gap-y-2 bg-white dark:bg-gray-800">
        <div className="name-credentials">
          <p className="font-semibold dark:text-white">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
        <p className="text-base text-gray-800 font-normal bg-white dark:bg-gray-800 dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export { Comment };
