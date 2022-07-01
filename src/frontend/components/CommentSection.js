import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../components";
import { addPostComment } from "../features";
import toast from "react-hot-toast";

const CommentSection = ({ postId, comments }) => {
  const [commentData, setCommentData] = useState({ text: "" });

  const {
    token,
    user: { firstName, lastName, username, avatarURL },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const addCommentHandler = async () => {
    if (commentData.text !== "") {
      const response = await dispatch(
        addPostComment({
          postId,
          commentData: {
            firstName,
            lastName,
            username,
            avatarURL,
            text: commentData.text,
          },
          token,
        })
      );
      if (response?.payload?.posts) {
        toast.success("Your comment has been created successfully!", {
          style: {
            background: "#22c55e",
            color: "#FFFFFF",
          },
        });
        setCommentData({ ...commentData, text: "" });
      }
    } else {
      toast.error("Oops! Something went wrong...", {
        style: {
          background: "#ef4444",
          color: "#FFFFFF",
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center">
        <div className="relative mr-3 w-full">
          <input
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add your comment..."
            type="text"
            name="comment"
            value={commentData.text}
            onChange={(e) =>
              setCommentData({ ...commentData, text: e.target.value })
            }
            required
          />
        </div>
        <div className="comment-action">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={addCommentHandler}
          >
            Comment
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {comments.map((comment) => (
          <Comment key={comment._id} postId={postId} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export { CommentSection };
