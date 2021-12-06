import imageFooter from "../../assets/image/Grupo.png";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>Con el Patrocinio de</span>
        <div className={styles.img}>
          <img src={imageFooter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
