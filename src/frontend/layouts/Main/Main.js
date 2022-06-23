import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  BookmarksPage,
  ExplorePage,
  FeedPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  SinglePostPage,
} from "../../pages";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/bookmarks" element={<BookmarksPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/post" element={<SinglePostPage />} />
    </Routes>
  );
};

export { Main };
