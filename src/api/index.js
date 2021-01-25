import axios from "axios";

export default {
  auth: {
    login(data) {
      return axios.post(`http://localhost:8000/api/auth/login`, data, {
        headers: { "Content-type": "application/json" },
      });
    },
    register(data) {
      return axios.post(`${process.env.REACT_API}/auth/register`, data);
    },
  },
};
