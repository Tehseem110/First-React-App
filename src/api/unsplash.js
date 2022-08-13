import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Pjk63PfpuUg5qvrXlSTL1maxXSaDWXpwYbl1GZDxk8g",
  },
});
