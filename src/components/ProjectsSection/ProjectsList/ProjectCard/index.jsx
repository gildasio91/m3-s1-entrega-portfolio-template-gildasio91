import ImgGitHub from "../../../../assets/git-icon.png"
import styles from "./style.module.css"

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.li__projects}>
      <div className={styles.li__info}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a>Saiba Mais</a>
      </div>
      <img src={ImgGitHub}/>
  
    </li>
  );
};
