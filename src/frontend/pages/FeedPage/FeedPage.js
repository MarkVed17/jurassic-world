import React from "react";
import {
  CreatePost,
  Post,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";

const FeedPage = () => {
  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow gap-4 max-w-2xl p-4">
        <CreatePost />
        <div className="flex flex-col gap-3">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { FeedPage };
