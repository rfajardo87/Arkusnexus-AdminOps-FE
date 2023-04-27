import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Cookie from "js-cookie";
import { useToast } from "@chakra-ui/react";
import SignIn from "./SignIn";
import useAxios from "shared/hooks/useAxios";
import { TokenContext } from "shared/context/token";

export default function SigninApp() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { req } = useAxios();
  const toast = useToast();
  const { data, setToken } = useContext(TokenContext);
  const [complete, setComplete] = useState(false);

  const signAction = async () => {
    try {
      const data = await req.post("/auth", {
        password,
        correo,
      });
      const token = await data.data;
      setToken(token);
      Object.entries(token).map((pair) => {
        if (["isAuth", "token", "info"].includes(pair[0])) {
          Cookie.set(pair[0], pair[1], { expires: 1 });
        }
      });
      setComplete(true);
    } catch (error) {
      toast({
        status: "error",
        title: "Acceso denegado",
      });
    }
  };

  return data && data.isAuth && complete ? (
    <Redirect to={"/admin/dashboard"} />
  ) : (
    <SignIn
      setCorreo={setCorreo}
      setPassword={setPassword}
      signAction={signAction}
    />
  );
}
