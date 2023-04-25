import React from "react";
import clsx from "clsx";

export default function FA({ icon, style = {} }) {
  return <i className={clsx("fa-solid", `fa-${icon}`)} style={style} />;
}
