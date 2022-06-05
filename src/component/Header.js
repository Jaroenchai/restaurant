import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.image_Header} src="../image/jang.jpg" />
      <p className={styles.text}>Jaroenchai Saejang</p>
    </div>
  );
}

export default Header;
