import axios from 'axios'
import {message} from 'antd'

axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    message.error("请求出错 " + error.message);
    return new Promise(() => {});
  }
);

export default axios
