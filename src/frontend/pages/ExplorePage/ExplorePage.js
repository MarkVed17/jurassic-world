import React from "react";
import {
  ExplorePageFilter,
  PostsSection,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";
import { useSelector } from "react-redux";
import { giveExplorePosts } from "../../utils";

const ExplorePage = () => {
  const { most } = useSelector((state) => state.filters);
  const { data: posts } = useSelector((state) => state.posts);

  const explorePosts = giveExplorePosts(posts, most);

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col">
        <ExplorePageFilter />
        <PostsSection posts={explorePosts} />
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { ExplorePage };
