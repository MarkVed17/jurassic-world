import axios from "axios";

const getUserPostService = async (postId) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { getUserPostService };
