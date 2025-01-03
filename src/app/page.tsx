import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Image
          src="/logo.svg"
          alt="Website logo"
          width={128}
          height={128}
          priority
        />
        <Link href="/">Home</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <footer></footer>
    </div>
  );
}
