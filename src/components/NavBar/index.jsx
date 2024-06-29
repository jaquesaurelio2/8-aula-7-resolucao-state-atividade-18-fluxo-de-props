import * as React from "react";
import styles from "./index.module.css";

export default function NavBar({ user }) {
  return (
    <header className={styles.navBar}>
      <p>Usuário atual: {user}</p>
    </header>
  );
}
