import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const register = async ({fullName, username, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, username, password, confirmPassword, gender});

    if (!success) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/auth/register",
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};

export default useRegister;

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
