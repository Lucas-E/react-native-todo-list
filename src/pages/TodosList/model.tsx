import { useState } from "react";

export function useTodoList(){
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState<string>("");

    function onChangeText(text: string){
        setText(text);
    }
  
    const addTodo = () => {
      if (text) {
        setTodos(prevState => [...prevState, text]);
        setText("");
      }
    };
  
    const removeTodo = (index: number|string) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    return {
      todos,
      text,
      setText,
      addTodo,
      removeTodo,
      onChangeText
    };
}