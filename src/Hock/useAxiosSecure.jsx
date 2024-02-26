import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://domain-hub-server-side.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logoutUser } = UseAuth();
  useEffect(() => {
    axiosSecure?.interceptors?.response?.use(
      (res) => {
        return res;
      },
      (error) => {
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
          logoutUser().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;