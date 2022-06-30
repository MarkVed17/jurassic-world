import axios from "axios";

const editPostService = async (postId, postData, token) => {
  try {
    const response = await axios.delete(
      `/api/posts/edit/${postId}`,
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

export { editPostService };
