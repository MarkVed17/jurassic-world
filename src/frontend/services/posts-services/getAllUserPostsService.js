import axios from "axios";

const getAllUserPostsService = async (username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { getAllUserPostsService };
