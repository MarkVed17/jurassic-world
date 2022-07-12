import axios from "axios";

const addToBookmarkPostsService = async (postId, token) => {
  const response = await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response;
};

export { addToBookmarkPostsService };
