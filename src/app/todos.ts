// app/todos.ts (in-memory store for demo)

type Todo = { id: string; text: string };
const todos: Todo[] = [];

export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  todos.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2), text });
}

export function deleteTodo(id: string) {
  const idx = todos.findIndex(t => t.id === id);
  if (idx !== -1) todos.splice(idx, 1);
}
