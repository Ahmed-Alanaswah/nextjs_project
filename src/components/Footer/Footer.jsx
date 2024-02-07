import Image from "next/image";
import { social_media } from "./data";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 HEXHASHOP. All rights reserved.</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            alt={`hexashop ${media.name} link`}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
