import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../features";
import {
  JURASSIC_WORLD_AUTH_TOKEN,
  JURASSIC_WORLD_USER_INFO,
} from "../../constants";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const signInHandler = async (user) => {
    const response = await dispatch(signin(user));

    if (response?.payload?.encodedToken) {
      localStorage.setItem(
        JURASSIC_WORLD_AUTH_TOKEN,
        response.payload.encodedToken
      );
      localStorage.setItem(
        JURASSIC_WORLD_USER_INFO,
        JSON.stringify(response.payload.foundUser)
      );
      navigate(from, { replace: true });
      toast.success("Logged in Successfully!", {
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
    <div className="main-content dark:bg-gray-800">
      <div className="m-auto p-4 w-fit bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 sm:w-96 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            signInHandler(user);
          }}
        >
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign In
          </h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="name"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="e.g. johndoe"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              minLength="8"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="/signin"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <button
            type="button"
            className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-800 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setUser({
                username: "vedantlahane",
                password: "vedant123",
              });
              signInHandler({
                username: "vedantlahane",
                password: "vedant123",
              });
            }}
          >
            Login as Guest
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignInPage };
