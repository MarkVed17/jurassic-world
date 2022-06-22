import React from "react";
import { Post, Sidebar, SuggestedUsersCard } from "../../components";

const SinglePostPage = () => {
  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow gap-3 max-w-2xl p-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { SinglePostPage };
