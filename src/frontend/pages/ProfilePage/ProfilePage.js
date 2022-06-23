import React from "react";
import {
  Post,
  ProfileSection,
  Sidebar,
  SuggestedUsersCard,
} from "../../components";

const ProfilePage = () => {
  return (
    <div className="main-content justify-evenly dark:bg-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Center Content */}
      <div className="flex flex-col grow max-w-2xl gap-4 p-4">
        <ProfileSection />
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

export { ProfilePage };
