import { technologies } from "../../../data/technologies";
import { TechCard } from "./TechCard";
import styles from "./style.module.css";

export const TechList = () => {
  return (
    <ul className={styles.ul__tech} >
      {technologies.map((technologie, i) => {
        return <TechCard key={i} technologie={technologie} />;
      })}
    </ul>
  );
};
