import hero from "/public/images/hero.svg";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Best Online Shop</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          repudiandae distinctio cupiditate sed. Obcaecati possimus libero
          temporibus corporis fuga, blanditiis sed.
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={hero} alt="hero image" />
      </div>
    </div>
  );
}
