import React from "react";

const Post = ({ post }) => {
  const { firstName, lastName, username, avatarURL, content } = post;

  return (
    <div className="flex items-center gap-3 py-4 px-4 rounded bg-gray-100 dark:bg-gray-700">
      <img
        className="w-14 h-14 rounded-full self-start bg-gray-100 dark:bg-gray-700"
        src={avatarURL}
        alt="User Avatar"
      />
      <div className="flex flex-grow flex-col gap-y-2 bg-gray-100 dark:bg-gray-700">
        <div className="name-credentials">
          <p className="font-semibold dark:text-white">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{username}
          </p>
        </div>
        <p className="text-base text-gray-800 font-normal bg-gray-100 dark:bg-gray-700 dark:text-white">
          {content}
        </p>
        <div className="flex justify-between">
          <button className="flex gap-1 text-black hover:text-green-600 dark:text-white dark:hover:text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <p className="font-light">3</p>
          </button>

          <button className="flex gap-1 text-black hover:text-rose-600 dark:text-white dark:hover:text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-rose-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              />
            </svg>
            <p className="font-light">3</p>
          </button>
          <button className="flex gap-1 text-black hover:text-sky-600 dark:text-white dark:hover:text-sky-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-sky-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <p className="font-light">3</p>
          </button>
          <button className="flex gap-1 text-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Post };
