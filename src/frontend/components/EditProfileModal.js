import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features";
import toast from "react-hot-toast";

const EditProfileModal = ({ setEditProfileModal, profile }) => {
  const [userData, setUserData] = useState("");

  const { firstName, lastName, avatarURL, username, bio, website } = profile;

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const editProfileHandler = async () => {
    const response = await dispatch(editUser({ userData, token }));

    if (response?.payload?.user !== undefined) {
      toast.success("Your profile has been updated successfully!", {
        style: {
          background: "#22c55e",
          color: "#FFFFFF",
        },
      });
    } else {
      toast.error(`${response.payload}`, {
        style: {
          background: "#ef4444",
          color: "#FFFFFF",
        },
      });
    }
  };

  return (
    <div
      onClick={() => setEditProfileModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600/[0.5]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-3 rounded shadow-md px-7 py-5 bg-gray-100 dark:bg-gray-900 w-3/4 sm:w-1/2 md:1/3 lg:w-1/4"
      >
        <div className="flex items-center py-3">
          <p className="text-xl text-gray-900 font-bold font-medium dark:text-white">
            Editing Profile
          </p>
          <button
            className="h-5 w-5 ml-auto rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => setEditProfileModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Vedant"
                value={firstName}
                disabled
                required
              />
            </div>

            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lahane"
                value={lastName}
                disabled
                required
              />
            </div>
          </div>

          <div>
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="vedantlahane"
              value={username}
              disabled
              required
            />
          </div>

          <div>
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Avatar URL
            </label>
            <input
              type="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="vedantlahane"
              value={avatarURL}
              disabled
              required
            />
          </div>

          <div>
            <label
              for="bio"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Bio
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="I am one dino head"
              defaultValue={bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Website
            </label>
            <input
              type="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="I am one dino head"
              defaultValue={website}
              onChange={(e) =>
                setUserData({ ...userData, website: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            class="text-gray-900 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => setEditProfileModal(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              editProfileHandler();
              setEditProfileModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { EditProfileModal };
