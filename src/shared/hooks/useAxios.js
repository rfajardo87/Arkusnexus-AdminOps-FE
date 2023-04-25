import { useContext } from "react";
import { axiosInstance } from "shared/api/axiosInstance";
import { TokenContext } from "shared/context/token";

export default function useAxios() {
  const token = useContext(TokenContext);
  const instance = axiosInstance(token);
  return {
    req: instance,
  };
}
