import axios from "axios";

const api = axios.create({
  baseURL:
    "https://bwk77bagpk7jjyoj3zv27j4tmm0pazvx.lambda-url.eu-central-1.on.aws/v1",
});

export default api;
