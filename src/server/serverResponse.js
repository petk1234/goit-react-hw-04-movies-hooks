import axios from "axios";
const getResponse = (url) => {
  return axios.get(url).then((res) => res.data);
};
export default getResponse;
