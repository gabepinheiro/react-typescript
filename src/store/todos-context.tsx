import { createContext, useState } from 'react'

import { TodoProps } from "../models/Todo";

type TodosContextProps = {
  items: TodoProps[];
  addTodo: (value: TodoProps) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<Partial<TodosContextProps>>({})

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoProps[]>([])

  const addTodo = (value: TodoProps) => {
    setTodos(prev => [value, ...prev]);
  }

  const removeTodo = (id: string) => {
    setTodos(prev => {
      const todosFiltered = prev.filter(todo => todo.id !== id )
      
      return todosFiltered;
    })
  }

  const contextValue = {
    items: todos,
    addTodo,
    removeTodo
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}
