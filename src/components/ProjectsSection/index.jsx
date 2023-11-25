import { ProjectList } from "./ProjectsList";
import styles from "./style.module.css"

export const ProjectSection = () => {
  return (
    <section className={styles.projects__container}>
      <div className={styles.projects__content}>
        <h2>Projetos</h2>
        <ProjectList />
      </div>
    </section>
  );
};
