import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  likePost,
  dislikePost,
  addToBookmarkPosts,
  removeFromBookmarkPosts,
  deletePost,
  editPost,
} from "../features";
import Moment from "react-moment";
import toast from "react-hot-toast";
import { PostDropdownMenu } from "./PostDropdownMenu";
import { EditPostModal } from "./EditPostModal";

const Post = ({ post }) => {
  const [postDropdownMenu, setPostDropdownMenu] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);

  const {
    _id,
    firstName,
    lastName,
    username,
    avatarURL,
    updatedAt,
    content,
    likes: { likedBy, dislikedBy },
    comments,
  } = post;

  const [postData, setPostData] = useState({ content });

  const { user, token } = useSelector((state) => state.auth);
  const { data: bookmarks } = useSelector((state) => state.bookmarks);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likeHandler = (e) => {
    e.stopPropagation();
    dispatch(likePost({ postId: _id, token }));
  };

  const dislikeHandler = (e) => {
    e.stopPropagation();
    dispatch(dislikePost({ postId: _id, token }));
  };

  const addToBookmarksHandler = (e) => {
    e.stopPropagation();
    dispatch(addToBookmarkPosts({ postId: _id, token }));
  };

  const removeFromBookmarksHandler = (e) => {
    e.stopPropagation();
    dispatch(removeFromBookmarkPosts({ postId: _id, token }));
  };

  const editPostHandler = async () => {
    const response = await dispatch(editPost({ postId: _id, postData, token }));
    if (response?.payload?.posts !== undefined) {
      toast.success("Your post has been updated successfully!", {
        style: {
          background: "#22c55e",
          color: "#FFFFFF",
        },
      });
    } else {
      toast.error(`${response.payload}`, {
        style: {
          background: "#ef4444",
          color: "#FFFFFF",
        },
      });
    }
  };

  const deletePostHandler = async () => {
    if (pathname === "/bookmarks") {
      dispatch(removeFromBookmarkPosts({ postId: _id, token }));
    }
    const response = await dispatch(deletePost({ postId: _id, token }));
    if (response?.payload?.posts !== undefined) {
      toast.success("Your post has been deleted successfully!", {
        style: {
          background: "#22c55e",
          color: "#FFFFFF",
        },
      });
    }
  };

  return (
    <>
      <div
        className="relative flex items-center gap-3 py-4 px-4 rounded bg-gray-100 dark:bg-gray-700 hover:cursor-pointer"
        onClick={() => navigate(`/post/${_id}`)}
      >
        <img
          className="w-14 h-14 rounded-full self-start bg-gray-100 dark:bg-gray-700"
          src={
            avatarURL === null
              ? `https://ui-avatars.com/api/?name=${firstName}+${lastName}?format=svg`
              : avatarURL
          }
          alt="User Avatar"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${username}`);
          }}
        />
        <div className="flex flex-grow flex-col gap-y-2 bg-gray-100 dark:bg-gray-700">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="name-credentials">
                <p className="font-semibold dark:text-white">
                  {firstName} {lastName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  @{username}
                </p>
              </div>
              <Moment
                fromNow
                className="font-light text-normal text-gray-400 dark:text-gray-500"
              >
                {updatedAt}
              </Moment>
            </div>
            {user.username === username && (
              <button
                className="h-6 w-6 rounded-full text-gray-400 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setPostDropdownMenu(!postDropdownMenu);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            )}
            {postDropdownMenu && (
              <PostDropdownMenu
                setPostDropdownMenu={setPostDropdownMenu}
                setEditPostModal={setEditPostModal}
                deletePostHandler={deletePostHandler}
              />
            )}
          </div>

          <p className="text-base text-gray-800 font-normal bg-gray-100 dark:bg-gray-700 dark:text-white">
            {content}
          </p>
          <div className="flex justify-between">
            <button
              className={`flex gap-1 ${
                likedBy.find(({ username }) => username === user.username)
                  ? "text-green-400 hover:text-green-400 dark:text-green-400 dark:hover:text-green-400"
                  : "text-black hover:text-green-400 dark:text-white dark:hover:text-green-400"
              }`}
              onClick={likeHandler}
            >
              {likedBy.find(({ username }) => username === user.username) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
              <p className="font-light">
                {likedBy.length !== 0 && likedBy.length}
              </p>
            </button>

            <button
              className={`flex gap-1 ${
                dislikedBy.find(({ username }) => username === user.username)
                  ? "text-rose-400 hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-400"
                  : "text-black hover:text-rose-400 dark:text-white dark:hover:text-rose-400"
              }`}
              onClick={dislikeHandler}
            >
              {dislikedBy.find(({ username }) => username === user.username) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-rose-400"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
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
              <p className="font-light text-inherit">{comments.length}</p>
            </button>

            {bookmarks.find((post) => post._id === _id) ? (
              <button
                className="flex gap-1 text-black dark:text-white"
                onClick={removeFromBookmarksHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="flex gap-1 text-black dark:text-white"
                onClick={addToBookmarksHandler}
              >
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
            )}
          </div>
        </div>
      </div>
      {editPostModal && (
        <EditPostModal
          setEditPostModal={setEditPostModal}
          postData={postData}
          setPostData={setPostData}
          editPostHandler={editPostHandler}
          post={post}
        />
      )}
    </>
  );
};

export { Post };
