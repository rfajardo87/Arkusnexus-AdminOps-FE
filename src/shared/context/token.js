import { createContext } from "react";

export const TokenContext = createContext({
  data: {
    isAuth: false,
    token: "",
  },
  setToken: (data) => {},
});
