import styles from "./index.module.css";

export default function Main(props) {
  return (
    <section className={styles.main}>
      <p>Bem-vindo, {props.user}!</p>
    </section>
  );
}
