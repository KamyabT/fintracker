import toast from "react-hot-toast";
import api from "./api";

async function auth(email, password) {
  try {
    const result = await api.post("/collections/users/auth-with-password", {
      identity: email,
      password: password,
    });
    return result;
  } catch (error) {
    toast.error("Authentication error, Please try again");
    throw error; // Re-throw the error to be handled by the caller
  }
}

export default auth;
