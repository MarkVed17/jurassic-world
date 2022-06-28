import axios from "axios";

const likePostService = async (postId, token) => {
  const response = axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
  console.log(response);
  return response;
};

export { likePostService };
