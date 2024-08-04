import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({username, password}) => {
    const success = handleInputErrors({username, password});

    if (!success) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.data;
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

  return { login, loading };
};

export default useLogin;

function handleInputErrors({username, password}) {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }

  return true;
}
