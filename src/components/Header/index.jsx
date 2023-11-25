import LogoPortfolio from "../../assets/portfolio.png";
import styles from "./style.module.css"

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
      <img src={LogoPortfolio} alt="logo do portifólio"></img>
      <div className={styles.header__div}>
        <h3 className={styles.header__title3}>Sobre</h3>
        <h3 className={styles.header__title3}>Stack</h3>
        <h3 className={styles.header__title3}>Projetos</h3>
      </div>
      <button className={styles.header__button}>Contato</button>
      </div>

    </header>
  );
};
