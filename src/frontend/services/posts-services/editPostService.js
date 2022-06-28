import axios from "axios";

const editPostService = async (postId, postDetails, token) => {
  try {
    const response = await axios.delete(
      `/api/posts/edit/${postId}`,
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

export { editPostService };
