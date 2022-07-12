import React from "react";
import { useNavigate } from "react-router-dom";

const EditCommentModal = ({
  setEditCommentModal,
  commentData,
  setCommentData,
  editCommentHandler,
  comment,
}) => {
  const { firstName, lastName, username, avatarURL, text } = comment;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => setEditCommentModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600/[0.5]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-3 rounded shadow-md p-5 bg-gray-100 dark:bg-gray-900 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
      >
        <div className="flex items-center p-2">
          <p className="text-xl text-gray-900 font-bold font-medium dark:text-white">
            Editing Comment
          </p>
          <button
            className="h-5 w-5 ml-auto rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => setEditCommentModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 p-1">
          <img
            className="w-12 h-12 rounded-full self-start bg-gray-100 dark:bg-gray-700 hover:cursor-pointer"
            src={
              avatarURL === null
                ? `https://ui-avatars.com/api/?name=${firstName}+${lastName}?format=svg`
                : avatarURL
            }
            alt="User Avatar"
            onClick={() => {
              navigate(`/profile/${username}`);
            }}
          />
          <div className="flex gap-4">
            <div className="name-credentials">
              <p className="font-semibold dark:text-white">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                @{username}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded border py-4 px-4 bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-700">
          <textarea
            id="editor"
            rows="5"
            className="block h-10 px-0 w-full text-base text-gray-800 bg-white border-0 outline-none bg-gray-100 dark:bg-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="What's happening?"
            defaultValue={text}
            onChange={(e) => {
              e.stopPropagation();
              setCommentData({ ...commentData, text: e.target.value });
            }}
            required
          ></textarea>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            class="text-gray-900 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => setEditCommentModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              editCommentHandler();
              setEditCommentModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { EditCommentModal };
