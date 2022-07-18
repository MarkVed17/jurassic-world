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
import Mockman from "mockman-js";
import { PrivateRoute, ScrollToTop } from "../../components";

const Main = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/post/:postId" element={<SinglePostPage />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </ScrollToTop>
  );
};

export { Main };
