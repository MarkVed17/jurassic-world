import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsSection, Sidebar, SuggestedUsersCard } from "../../components";
import { getBookmarkPosts } from "../../features";

const BookmarksPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: bookmarks } = useSelector((state) => state.bookmarks);
  const { data: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((bookmarkedPost) => bookmarkedPost._id === post._id)
  );

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow gap-3 max-w-2xl p-4">
        {bookmarks.length === 0 ? (
          <p className="text-black text-xl m-auto dark:text-white">
            Oops! You haven't bookmarked anything yet...
          </p>
        ) : (
          <PostsSection posts={bookmarkedPosts} />
        )}
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { BookmarksPage };
