import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  PostsSection,
  ProfileSection,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";
import { getAllUserPosts, getUser } from "../../features";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  const {
    profile: { data: profile },
    posts: { data: posts },
  } = useSelector((state) => state.user);

  const { data: users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username, users]);

  useEffect(() => {
    dispatch(getAllUserPosts(username));
  }, [dispatch, username, posts]);

  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow max-w-2xl gap-4 p-4">
        {profile === null ? (
          <p className="text-black text-xl m-auto dark:text-white">
            Oops! User doesn't exist
          </p>
        ) : (
          <ProfileSection profile={profile} />
        )}

        {posts === null || posts.length === 0 ? (
          <p className="text-black text-xl m-auto dark:text-white">
            Oops! You haven't posted anything yet...
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <PostsSection posts={posts} />
            </div>
          </>
        )}
      </div>

      {/* Suggested Users */}
      <SuggestedUsersCard />
    </div>
  );
};

export { ProfilePage };
