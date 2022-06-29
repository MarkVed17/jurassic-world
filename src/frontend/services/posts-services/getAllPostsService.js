import axios from "axios";

const getAllPostsService = async () => {
  try {
    const response = await axios.get("/api/posts");
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { getAllPostsService };
