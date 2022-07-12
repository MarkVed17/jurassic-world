import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deletePostComment } from "../features";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const CommentDropdownMenu = ({
  setCommentDropdownMenu,
  setEditCommentModal,
  postId,
  commentId,
  token,
}) => {
  const dispatch = useDispatch();

  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deletePostComment({ postId, commentId, token })
    );
    if (response?.payload?.posts !== undefined) {
      toast.success("Your comment has been deleted successfully!", {
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

  const ref = useRef();
  useOnClickOutside(ref, () => setCommentDropdownMenu(false));

  return (
    <div
      ref={ref}
      className="absolute top-[50px] right-0 z-50 my-4 text-base list-none bg-white rounded border shadow-xl divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600 dark:border-gray-600"
    >
      <ul className="py-1">
        <li className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black dark:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <button
            className="block py-2 px-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setCommentDropdownMenu(false);
              setEditCommentModal(true);
            }}
          >
            Edit Comment
          </button>
        </li>
        <li className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black dark:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <button
            className="block py-2 px-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setCommentDropdownMenu(false);
              deleteCommentHandler();
            }}
          >
            Delete Comment
          </button>
        </li>
      </ul>
    </div>
  );
};

export { CommentDropdownMenu };
