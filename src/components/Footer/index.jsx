import LogoWhatsApp from "../../assets/whatsapp-icon.png";
import LogoLinkedIn from "../../assets/linkedin-icon.png";
import LogoGitHub from "../../assets/github-icon.png";
import scripts from "./script.module.css";

export const Footer = () => {
  return (
    <footer className={scripts.footer__container}>
      <div  className={scripts.footer__content}>
      <div  className={scripts.footer__contato}>
        <h2>Contato</h2>
        <div  className={scripts.footer__logos}>
          <img src={LogoWhatsApp} alt="logo whatsapp" />
          <img src={LogoLinkedIn} alt="logo linkedin" />
          <img src={LogoGitHub} alt="logo github" />
        </div>
      </div>
      <p>Todos os direitos reservados - José da Silva</p>
      </div>
    </footer>
  );
};
