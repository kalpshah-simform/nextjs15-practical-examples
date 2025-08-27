import { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";
// this page is always dynamic because of the fetch with { cache: "no-store" }

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

export default async function AppRouterPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 10 }}>App Router Page</h1>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid #ccc",
        }}
      >
        <h2>Static (force-cache)</h2>
        <Suspense fallback={<p>Loading static todos...</p>}>
          <StaticTodos />
        </Suspense>
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ccc" }}>
        <h2>Dynamic (no-store)</h2>
        <Suspense fallback={<p>Loading dynamic todos...</p>}>
          <Todos />
        </Suspense>
      </div>
      <Link href="/" className={styles.button}>Back</Link>
    </div>
  );
}
