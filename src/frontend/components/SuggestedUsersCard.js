import React from "react";
import { useSelector } from "react-redux";
import { giveSuggestedUsers } from "../utils";
import { SuggestedUser } from "./SuggestedUser";

const SuggestedUsersCard = () => {
  const {
    user: { username, following },
  } = useSelector((state) => state.auth);
  
  const { data: users } = useSelector((state) => state.users);

  const suggestedUsers = giveSuggestedUsers(users, username, following);

  return (
    <div className="hidden sticky top-20 p-4 max-w-md h-full bg-white rounded border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 lg:block">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Suggested
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {suggestedUsers.slice(0, 5).map((user) => (
            <SuggestedUser key={user._id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SuggestedUsersCard };
