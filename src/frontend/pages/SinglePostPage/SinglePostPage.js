import React from "react";
import {
  Comment,
  CommentSection,
  Post,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";

const SinglePostPage = () => {
  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow max-w-2xl p-4">
        <div className="flex flex-col gap-3">
          <Post />
          <CommentSection />
          {/* Comments */}
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { SinglePostPage };
