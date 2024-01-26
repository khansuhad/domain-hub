import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://localhost:5000",
  baseURL: " https://domain-hub-server-side.vercel.app",
 

});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
