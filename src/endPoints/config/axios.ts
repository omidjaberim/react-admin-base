import axios from "axios";
import { getItem } from "utils/localStorage";
import { toast } from "react-toastify";

const Axios = axios.create();
Axios.defaults.baseURL = process.env.REACT_APP_APIS_URL;
Axios.interceptors.request.use(
  function (config) {
    if (config.headers)
      config.headers["Authorization"] =
        "Bearer " + getItem("token")?.toString();
    config.timeout = 3500;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (error.response.status == 401 && !originalConfig._retry) {
      try {
        originalConfig._retry = true;
        ///const refreshToken = getRefreshToken();
        ///const rs = await getNewAccessTokenApi(refreshToken);
        ///const { accessToken } = rs.data;
        ///setItem("token",accessToken);
        ///instance.defaults.headers.common["x-access-token"] = accessToken;

        return Axios(originalConfig);
      } catch (_error) {
        // if (_error.response && _error.response.data) {
        //   return Promise.reject(_error.response.data);
        // }
        // return Promise.reject(_error);
      }
    }
    ///toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default Axios;
