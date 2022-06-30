import axios from "axios";

const createPostService = async (postData, token) => {
  try {
    const response = await axios.post(
      "/api/posts",
      { postData },
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
