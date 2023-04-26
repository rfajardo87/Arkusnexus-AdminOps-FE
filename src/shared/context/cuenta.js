import { createContext } from "react";

export const CuentaListContext = createContext({
  cuentas: [],
  setCuentas: (cuentas) => {},
});
