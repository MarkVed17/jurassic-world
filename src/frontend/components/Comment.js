import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { editPostComment } from "../features";
import { CommentDropdownMenu } from "./CommentDropdownMenu";
import { EditCommentModal } from "./EditCommentModal";

const Comment = ({ postId, comment }) => {
  const [commentDropdownMenu, setCommentDropdownMenu] = useState(false);
  const [editCommentModal, setEditCommentModal] = useState(false);
  
  const { user, token } = useSelector((state) => state.auth);

  const { _id, firstName, lastName, username, avatarURL, text } = comment;
  const [commentData, setCommentData] = useState({ text });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editCommentHandler = async () => {
    const response = await dispatch(
      editPostComment({ postId, commentId: _id, commentData, token })
    );
    if (response?.payload?.posts !== undefined) {
      toast.success("Your comment has been updated successfully!", {
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

  return (
    <>
      <div className="relative flex items-center gap-3 py-4 px-4 rounded bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <img
          className="w-10 h-10 rounded-full self-start dark:bg-gray-700 hover:cursor-pointer"
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
        <div className="flex grow flex-col gap-y-2 bg-white dark:bg-gray-800">
          <div className="flex justify-between">
            <div className="name-credentials">
              <p className="font-semibold dark:text-white">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                @{username}
              </p>
            </div>
            {user.username === username && (
              <button
                className="h-6 w-6 rounded-full text-gray-400 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setCommentDropdownMenu(!commentDropdownMenu);
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
            {commentDropdownMenu && (
              <CommentDropdownMenu
                setCommentDropdownMenu={setCommentDropdownMenu}
                setEditCommentModal={setEditCommentModal}
                postId={postId}
                commentId={_id}
                token={token}
              />
            )}
          </div>

          <p className="text-base text-gray-800 font-normal bg-white dark:bg-gray-800 dark:text-white">
            {text}
          </p>
        </div>
      </div>
      {editCommentModal && (
        <EditCommentModal
          setEditCommentModal={setEditCommentModal}
          commentData={commentData}
          setCommentData={setCommentData}
          editCommentHandler={editCommentHandler}
          comment={comment}
        />
      )}
    </>
  );
};

export { Comment };
