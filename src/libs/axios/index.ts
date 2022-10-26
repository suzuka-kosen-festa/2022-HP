import axios from "axios";

const ax = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("tk")}`,
  },
});

const auth = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const fetcher = (url: string) => ax.get(url).then(res => res.data);

export { ax, auth, fetcher };
