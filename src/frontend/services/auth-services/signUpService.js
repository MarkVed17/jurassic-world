import axios from "axios";

const signUpService = async (user) => {
  try {
    const response = await axios.post("/api/auth/signup", user);
    return response;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

export { signUpService };
