import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createPost } from "../features";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [postData, setPostData] = useState({ content: "" });

  const { user, token } = useSelector((state) => state.auth);
  const { firstName, lastName, username, avatarURL } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createPostHandler = async () => {
    const response = await dispatch(createPost({ postData, token }));

    if (response?.payload?.posts !== undefined) {
      toast.success("Your post has been created successfully!", {
        style: {
          background: "#22c55e",
          color: "#FFFFFF",
        },
      });
      setPostData({ content: "" });
    } else {
      toast.error(`${response.payload}`, {
        style: {
          background: "#ef4444",
          color: "#FFFFFF",
        },
      });
    }
  };

  return (
    <form
      className="pt-4 px-4"
      onSubmit={(e) => {
        e.preventDefault();
        createPostHandler();
      }}
    >
      <div className="mb-4 py-4 px-4 w-full bg-white rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-3 bg-white dark:bg-gray-800">
          <img
            className="w-10 h-10 rounded-full hover:cursor-pointer"
            src={
              avatarURL === null
                ? `https://ui-avatars.com/api/?name=${firstName}+${lastName}?format=svg`
                : avatarURL
            }
            alt={firstName}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${username}`);
            }}
          />
          <div className="font-medium bg-white dark:bg-gray-800 dark:text-white">
            <p>
              {firstName} {lastName}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{username}
            </p>
          </div>
        </div>
        <div className="py-4 px-4 bg-white dark:bg-gray-800">
          <textarea
            id="editor"
            rows="5"
            className="block px-0 w-full text-base text-gray-800 bg-white border-0 outline-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="What's happening?"
            value={postData.content}
            onChange={(e) => {
              setPostData({ ...postData, content: e.target.value });
            }}
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
