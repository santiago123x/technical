import React from "react";
import NarvBar from "../NavBar";
import "./index.css";

const Layout = ({ children, tipo }) => {
  return (
    <div className="contenedor">
      <div className="nav-contenedor">
        <NarvBar className="nav" tipo={tipo} />
      </div>
      <div className="chil-contenedor">{children}</div>
    </div>
  );
};

export default Layout;