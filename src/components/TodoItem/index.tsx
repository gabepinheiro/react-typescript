import { useContext } from 'react'

import { TodoProps } from "../../models/Todo"

import classes from './TodoItem.module.css'

import { TodosContext } from '../../store/todos-context'

const TodoItem: React.FC<TodoProps> = (
  { id, title, completed }
) => {

  const { removeTodo } = useContext(TodosContext)

  return (
    <li 
      className={classes.item}>{ title }
    
      <button 
        onClick={() => removeTodo!(id!)}>
          Remove
      </button>
    </li>
  )
}

export default TodoItem