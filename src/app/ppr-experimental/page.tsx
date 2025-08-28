import { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const experimental_ppr = true;

async function Todos() {
  const data = await (
    await fetch("https://dummyjson.com/todos/random", { cache: "no-store" })
  ).json();
  console.log("Fetched dynamic data:", data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

async function StaticTodos() {
  const data = await (
    await fetch("https://dummyjson.com/todos/random", { cache: "force-cache" })
  ).json();
  console.log("Fetched static data:", data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default async function PPRPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 10 }}>PPR Page</h1>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid #ccc",
        }}
      >
        <h2>static todos</h2>
        <Suspense fallback={<p>Loading static todos...</p>}>
          <StaticTodos />
        </Suspense>
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ccc" }}>
        <h2>Dynamic todos</h2>
        <Suspense fallback={<p>Loading dynamic todos...</p>}>
          <Todos />
        </Suspense>
      </div>
      <Link href="/" className={styles.button}>Back</Link>
    </div>
  );
}
