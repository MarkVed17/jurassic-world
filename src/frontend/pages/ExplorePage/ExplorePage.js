import React from "react";
import { PostsSection, Sidebar, SuggestedUsersCard } from "../../components";
import { useSelector } from "react-redux";

const ExplorePage = () => {
  const { data: posts } = useSelector((state) => state.posts);

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <PostsSection posts={posts} />

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { ExplorePage };
