import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser } from "../features";

const SuggestedUser = ({ user }) => {
  const { _id, firstName, lastName, username, avatarURL } = user;
  
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const followUserHandler = () => {
    dispatch(followUser({ followUserId: _id, token }));
  };

  return (
    <li key={_id} className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full hover:cursor-pointer"
            src={avatarURL}
            alt="User Avatar"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${username}`);
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            @{username}
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={followUserHandler}
        >
          Follow
        </button>
      </div>
    </li>
  );
};

export { SuggestedUser };
