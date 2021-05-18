import { useRef, FormEvent, useContext } from "react"

import { TodosContext } from '../../store/todos-context'

import classes from './FormTodo.module.css'

const FormTodo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const todoInputRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useContext(TodosContext)

  const submit = (event: FormEvent) => {
    event.preventDefault()

    const title = todoInputRef.current?.value;

    if(!title) {
      console.log('Digite o titulo da Tarefa')
      
      return; 
    }
    addTodo!({
      id: new Date().toISOString(),
      title,
      completed: false
    })

    formRef.current?.reset()
  } 

  return (
    <form ref={formRef} onSubmit={submit} className={classes.form}>
      <label htmlFor="title">Titulo: </label>
      <input type="text" id="title" ref={todoInputRef}/>
      <button>Adicionar Tarefa</button>
    </form>
  )
}

export default FormTodo