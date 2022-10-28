import axios from "axios";

const ax = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const fetcher = (url: string) => ax.get(url).then(res => res.data);

export { ax, fetcher };
