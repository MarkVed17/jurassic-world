import React from "react";
import {
  CreatePost,
  FeedPageFilter,
  PostsSection,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";
import { useSelector } from "react-redux";
import { giveFeedPosts } from "../../utils";

const FeedPage = () => {
  const { sortBy } = useSelector((state) => state.filters);
  
  const {
    user: { following, username },
  } = useSelector((state) => state.auth);

  const { data: posts } = useSelector((state) => state.posts);

  const feedPosts = giveFeedPosts(posts, following, username, sortBy);

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow gap-4 max-w-2xl">
        <CreatePost />
        <FeedPageFilter />
        <div className="flex flex-col gap-3">
          <PostsSection posts={feedPosts} />
        </div>
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { FeedPage };
