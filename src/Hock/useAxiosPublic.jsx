import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://localhost:5000",
  baseURL: "http://localhost:3000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
