import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function ImageComponent() {
  return (
    <div style={{ padding: 20 }}>
      <div className={styles.imageContainer}>
        <div>
          <Image src="/hero.jpg" alt="Hero" fill priority />
        </div>
      </div>
      <Link href="/" className={styles.button} style={{ marginLeft: 20 }}>
        Back
      </Link>
    </div>
  );
}
