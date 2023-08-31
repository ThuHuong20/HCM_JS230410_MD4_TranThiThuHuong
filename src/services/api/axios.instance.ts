import axios from "axios";

axios.defaults.headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "language": localStorage.getItem("i18nextLng") ?? "en"
};

axios.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("token")) {
            config.headers.Authorization = localStorage.getItem("token");
        } else {
            config.headers.Authorization = "false";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;