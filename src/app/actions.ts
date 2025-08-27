"use server";

import { addTodo, deleteTodo } from "./todos";
import { revalidatePath } from "next/cache";

export async function addTodoAction(formData: FormData) {
  const todo = formData.get("todo");
  if (typeof todo === "string" && todo.trim()) {
    addTodo(todo.trim());
    revalidatePath("/");
  }
}

export async function deleteTodoAction(formData: FormData) {
  const id = formData.get("id");
  if (typeof id === "string") {
    deleteTodo(id);
    revalidatePath("/");
  }
}

export async function submitForm(formData: FormData) {
  const name = formData.get("name");
  if (!name) throw new Error("Name is required");
  console.log("Form submitted with name:", name);
}

export async function createUser(formData: FormData) {
  const name = formData.get("name");
  if (typeof name === "string" && name.trim()) {
    addTodo(name.trim());
    revalidatePath("/");
    return { success: true, name: name.trim() };
  }
  return { success: false };
}
