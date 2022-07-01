import axios from "axios";

const addToBookmarkPostsService = async (postId, token) => {
  console.log("here");
  const response = await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  console.log(response);
  return response;
};

export { addToBookmarkPostsService };
