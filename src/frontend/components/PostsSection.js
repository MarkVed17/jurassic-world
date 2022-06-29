import React from "react";
import { Post } from "../components";

const PostsSection = ({ posts }) => {
  return (
    <div className="flex flex-col grow gap-3 max-w-2xl p-4">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export { PostsSection };
