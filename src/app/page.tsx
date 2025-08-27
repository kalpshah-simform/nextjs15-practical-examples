import styles from "./page.module.css";
import { addTodoAction, deleteTodoAction } from "./actions";
import { getTodos } from "./todos";
import Link from "next/link";

export default function Home() {
  const todos = getTodos();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Todos</h1>
        <ul className={styles.todoList}>
          {todos.map(todo => (
            <li key={todo.id} className={styles.todoItem}>
              <span>{todo.text}</span>
              <form action={deleteTodoAction} style={{ display: "inline" }}>
                <input type="hidden" name="id" value={todo.id} />
                <button type="submit" className={styles.deleteButton} aria-label="Delete todo">✕</button>
              </form>
            </li>
          ))}
        </ul>
        <form action={addTodoAction} style={{ display: "flex", gap: 8 }}>
          <input
            name="todo"
            placeholder="Add a todo"
            className={styles.input}
            autoComplete="off"
          />
          <button type="submit" className={styles.button}>Add</button>
        </form>
      </main>
      <footer className={styles.footer}>
        <Link href="/compiler-enhancement">Go to Compiler enhancement page</Link>
        <Link href="/app-router">Go to App Router page</Link>
        <Link href="/react-19">Go to React 19 Integration page</Link>
      </footer>
    </div>
  );
}
