import axios from "axios";

const removeFromBookmarkPostsService = async (postId, token) => {
  const response = await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};

export { removeFromBookmarkPostsService };
