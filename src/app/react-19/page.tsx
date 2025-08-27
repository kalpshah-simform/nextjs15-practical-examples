"use client";
import { useActionState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { createUser } from "../actions";
import TodoList from "@/components/TodoList";

export default function React19Page() {
  // Wrap createUser to match (state, formData) signature
  const action = async (_state: unknown, formData: FormData) => {
    return await createUser(formData);
  };
  const [state, dispatch, isPending] = useActionState(action, null);
  console.log("Action state:", state, "isPending:", isPending);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>React 19 Integration</h1>
      <form action={dispatch} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className={styles.input}
        />
        <button className={styles.button} disabled={isPending}>
          {isPending ? "Creating..." : "Create User"}
        </button>

        {state?.success && (
          <p style={{ marginTop: 10 }}>User {state.name} created!</p>
        )}
      </form>
      <TodoList styles={styles} />
      <Link href="/" className={styles.button} style={{ marginTop: "50px" }}>
        Back
      </Link>
    </div>
  );
}
