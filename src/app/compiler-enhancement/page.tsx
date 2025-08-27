"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function CompilerPage() {
  const [count, setCount] = React.useState(0);
  const router = useRouter();

  // Compiler will optimize this derived value
  const doubled = count * 2;

  function handleRedirect() {
    // Redirect to a page that demonstrates a hydration error (replace with your actual route)
    router.push("compiler-enhancement/hydration-error");
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ border: "1px solid #ccc" }}>
        <h1 style={{ marginBottom: 16 }}>
          React Compiler Derived Value Example (No more manual memoization)
        </h1>
        <button
          className={styles.button}
          style={{ marginBottom: "10px" }}
          onClick={() => setCount((c) => c + 1)}
        >
          Increment: {count}
        </button>
        <p>Doubled: {doubled}</p>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button className={styles.button} onClick={handleRedirect}>
          Go to Hydration Error Example
        </button>
        <button
          className={styles.button}
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
