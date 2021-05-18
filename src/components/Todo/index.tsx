import TodoItem from '../TodoItem'

import { useContext } from 'react'

import classes from './Todo.module.css'

import { TodosContext } from '../../store/todos-context'

const Todos: React.FC = () => {
  const { items } = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      { items?.map(todo => <TodoItem key={todo.id} {...todo} />) }
    </ul>
  )
}

export default Todos