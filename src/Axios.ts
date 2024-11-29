import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});

httpRequest.interceptors.request.use((req) => {
  console.log(req);
  console.log("Request Url" + req.baseURL);
  return req;
});

httpRequest.interceptors.response.use(null, (res) => {
  console.log(res.config);
  console.log(res);
  return res;
});

export default httpRequest;
