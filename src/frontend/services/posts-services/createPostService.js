import axios from "axios";

const createPostService = async (postDetails, token) => {
  try {
    const response = await axios.post(
      "/api/posts",
      { postDetails },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { createPostService };
