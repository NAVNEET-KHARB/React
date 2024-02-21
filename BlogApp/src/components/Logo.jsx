import React from "react";
import LogoImg from "../logo.png"

function Logo({ width = "100%" }) {
  return <img src={LogoImg} width={{ width }} alt="Logo Placeholder" />;
}

export default Logo;
