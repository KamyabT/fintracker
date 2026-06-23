import toast from "react-hot-toast";
import api from "./api";

export async function auth(email, password) {
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

export async function registerUser({ name, email, password, passwordConfirm }) {
  try {
    const result = await api.post("/collections/users/records", {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });

    return result;
  } catch (error) {
    toast.error("Authentication error, Please try again");
    throw error; // Re-throw the error to be handled by the caller
  }
}
