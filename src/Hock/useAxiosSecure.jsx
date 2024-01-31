import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://localhost:5000",
  baseURL: " http://localhost:3000",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
