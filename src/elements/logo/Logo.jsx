import Link from "next/link";
import styles from "./Logo.module.css";

import { Montserrat } from "next/font/google";

const logoFont = Montserrat({ subsets: ["latin"] });

function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>
      hecashop
    </Link>
  );
}

export default Logo;
