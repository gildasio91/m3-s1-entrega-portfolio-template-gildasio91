import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.css"

export const ProjectList = () => {
  return (
    <ul className={styles.ul__projects}>
      {projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />;
      })}
    </ul>
  );
};
