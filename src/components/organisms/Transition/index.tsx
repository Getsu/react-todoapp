import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./transition.css";

export const Transition: React.FC = () => {
  const { pathname } = useLocation();
  // const disabledStyle: React.CSSProperties = {
  //   pointerEvents: "none",
  //   backgroundColor: "#ccc",
  // };

  return (
    <ul>
      <li className={pathname === "/" ? css.transition : undefined }>
        <Link to="/">トップページ</Link>
      </li>
      <li className={pathname === "/text" ? css.transition : undefined}>
        <Link to="/text">Note</Link>
      </li>
    </ul>
  );
};
