import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CommentSection,
  Post,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";
import { getUserPost } from "../../features";

const SinglePostPage = () => {
  const { data: post } = useSelector((state) => state.post);
  const { data: posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getUserPost(postId));
  }, [dispatch, postId, posts]);

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow max-w-2xl p-4">
        <div className="flex flex-col gap-3">
          {post === null ? (
            <p className="text-black text-xl m-auto dark:text-white">
              Oops! Couldn't find what you're looking for...
            </p>
          ) : (
            <>
              <Post post={post} />
              <CommentSection postId={postId} comments={post.comments} />
            </>
          )}
        </div>
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { SinglePostPage };
