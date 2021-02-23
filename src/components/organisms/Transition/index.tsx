import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Transition: React.FC = () => {
  const { pathname } = useLocation();
  const disabledStyle: React.CSSProperties = {
    pointerEvents: "none",
    backgroundColor: "#ccc",
  };

  return (
      <ul>
        <li style={pathname === "/" ? disabledStyle : undefined}>
          <Link to="/">トップページ</Link>
        </li>
        <li style={pathname === "/about" ? disabledStyle : undefined}>
          <Link to="/text">Note</Link>
        </li>
      </ul>
  );
};
