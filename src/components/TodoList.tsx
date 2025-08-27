"use client";
import { useOptimistic, useState } from "react";
import { addTodoAction } from "@/app/actions";

export default function TodoList({
  styles,
}: Readonly<{ styles: Record<string, string> }>) {
  const [todos, setTodos] = useState<string[]>([]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: string) => [...state, newTodo]
  );

  async function handleAdd(formData: FormData) {
    const todo = formData.get("name") as string;
    addOptimisticTodo(todo);
    await addTodoAction(formData); // server action
    setTodos([...todos, todo]);
    console.log(todos);
  }

  return (
    <>
      <h2>Todo List (with Optimistic UI)</h2>
      <ul>
        {optimisticTodos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <form action={handleAdd} style={{ marginBottom: 20 }}>
        <input
          className={styles.input}
          placeholder="Your name"
          type="text"
          name="name"
        />
        <button className={styles.button}>Add</button>
      </form>
    </>
  );
}
