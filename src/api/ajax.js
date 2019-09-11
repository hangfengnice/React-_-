import axios from 'axios'
import {message} from 'antd'

axios.interceptors.request.use(function(config) {
  return config;
});

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    message.error("请求出错 " + error.message);
    return new Promise(() => {});
  }
);

export default axios
