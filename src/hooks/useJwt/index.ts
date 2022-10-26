import { auth } from "../../libs/axios";

type AuthRes = {
  access_token: string;
};

const useJwt = () => {
  const tk = window.localStorage.getItem("tk");
  if (tk === null) {
    auth
      .post<AuthRes>("/auth", { username: "admin", password: import.meta.env.VITE_PW })
      .then(res => {
        window.localStorage.setItem("tk", res.data.access_token);
      })
      .catch((e: unknown) => {
        throw new Error(`Catch new error: ${e}`);
      });
  }
};

export { useJwt };
