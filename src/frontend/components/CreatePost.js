import React from "react";

const CreatePost = () => {
  return (
    <form>
      <div className="mb-4 py-4 px-4 w-full bg-white rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-3 bg-white dark:bg-gray-800">
          <img
            className="w-10 h-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1413581804653617157/Lb6QIsaO_400x400.jpg"
            alt="User Avatar"
          />
          <div className="font-medium bg-white dark:bg-gray-800 dark:text-white">
            <p>Vedant Lahane</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @username
            </p>
          </div>
        </div>
        <div className="py-4 px-4 bg-white dark:bg-gray-800">
          <textarea
            id="editor"
            rows="5"
            className="block px-0 w-full text-base text-gray-800 bg-white border-0 outline-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="What's happening?"
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:bg-blue-700 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Post
      </button>
    </form>
  );
};

export { CreatePost };
