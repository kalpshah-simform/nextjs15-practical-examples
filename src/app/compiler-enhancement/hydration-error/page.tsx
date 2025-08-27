"use client";

import Link from "next/link";
import styles from "../page.module.css";

export default function HydrationErrorPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hydration Error Example</h1>
      <h1>{Date.now()}</h1>
      <p>This page shows a hydration error because the timestamp changes on each render.</p>
      <br />
      <Link href="/compiler-enhancement" className={styles.button}>Go back to Compiler Page</Link>
    </div>
  );
}