import axios from "axios";

const qs = require("qs");
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  paramsSerializer: function (params:any) {
    return qs.stringify(params, {
      encode: true,
    
    });
  },
});


http.interceptors.response.use(
  (response) => {
    return response;
  },
  
  (error) => {
    if (error?.response?.status === 401) {
      return;
    }
    
    if (error.response.status === 404) {
    //   window.location.href = "/not-found";
      return;
    }

    else if (
      !!error.response &&
      !!error.response.data.message
    ) {
    } else if (!error.response) {
    console.log("ErrorUnKnow")
    }

    setTimeout(() => { }, 1000);

    return Promise.reject(error);
  }
);

export default http;
