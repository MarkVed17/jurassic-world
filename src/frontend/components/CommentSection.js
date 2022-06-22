import React from "react";

const CommentSection = () => {
  return (
    <div className="flex items-center">
      <div className="relative mr-3 w-full">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add your comment..."
          type="text"
          name="comment"
          required
        />
      </div>
      <div className="comment-action">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Comment
        </button>
      </div>
    </div>
  );
};

export { CommentSection };
