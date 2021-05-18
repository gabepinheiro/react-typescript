import FormTodo from './components/FormTodo';

import Todos from './components/Todo'

import { TodosContextProvider } from './store/todos-context'

function App() {
  
  return (
    <div>
      <TodosContextProvider>
        <FormTodo />
        <Todos  /> 
      </TodosContextProvider>     
    </div>
  );
}

export default App;
