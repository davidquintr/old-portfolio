import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Divider = (props) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={"divider" + (darkMode ? " darkmode-divider" : "")} id={props.id}>
      <h2 className="divider-text">{props.name}</h2>
      <span className="divider-round"></span>
    </div>
  );
};

export default Divider;
