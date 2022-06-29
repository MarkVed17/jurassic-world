import axios from "axios";

const deletePostService = async (postId, token) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { deletePostService };
