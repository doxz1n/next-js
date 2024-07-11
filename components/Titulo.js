import React from "react";
import styles from "../styles/Titulo.module.css";

function Title(props) {
  return <h1 className={styles.titulo}>{props.children}</h1>;
}

export default Title;
