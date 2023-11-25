import styles from "./style.module.css"

export const TechCard = ({ technologie }) => {

  return (
    <li className={styles.li__tech}>
      <img src={technologie.img} />
      <h3>{technologie.name}</h3>
    </li>
  );
};
