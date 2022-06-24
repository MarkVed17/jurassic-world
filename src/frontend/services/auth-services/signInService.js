import axios from "axios";

const signInService = async (user) => {
  try {
    const response = await axios.post("/api/auth/login", user);
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { signInService };
