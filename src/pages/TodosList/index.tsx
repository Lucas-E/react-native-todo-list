import React from 'react'
import { useTodoList } from "./model";
import { TodoListView } from "./view";

export function TodoList() {
  const model = useTodoList();

  return <TodoListView {...model} />;
}
