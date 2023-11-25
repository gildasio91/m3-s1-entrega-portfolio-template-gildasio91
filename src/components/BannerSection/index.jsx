import Banner from "../../assets/banner-img.png";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.banner__container}>
      <div className={styles.banner__content}>
        <div className={styles.banner__info}>
          <h3>JOSEDASILVA</h3>
          <h1>Bem vindo ao meu portfólio</h1>
          <p>Uma frase interessante sobre mim</p>
          <button>Saiba mais</button>
        </div>
        <img src={Banner} alt="imagem banner" />
      </div>
    </section>
  );
};
