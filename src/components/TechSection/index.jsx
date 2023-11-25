import { TechList } from "../TechSection/TechList";
import styles from "./style.module.css";

export const TechSection = () => {
  return (
    <section className={styles.tech__container}>
      <div className={styles.tech__content}>
        <h2>Tecnologias</h2>
        <TechList  />
      </div>
    </section>
  );
};
