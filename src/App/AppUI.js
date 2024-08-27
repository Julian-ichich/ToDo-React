import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../ReactContext';
import { FormTodo } from "../FormTodo";
import { Modal } from '../Modal ';



function AppUI() {

  const {loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    aumentarLikes,
    disminuirLikes,
    openModal,
    todos, 
    EditarTexto,
    onOpenModal
  
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

     
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0 && todos.length === 0) && <EmptyTodos />}
            {(!loading && searchedTodos.length === 0 && todos.length > 0) && <h1>No se encontraron coincidencias</h1>}

            {searchedTodos.map((todo) =>
            (<TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text, todo.id)}
              onDelete={() => deleteTodo(todo.text, todo.id)}
              onAumentarLikes={() => aumentarLikes(todo.text, todo.id)}
              onDisminuirLikes={() => disminuirLikes(todo.text, todo.id)}
              likes={todo.likes}
              onEditarTexto={()=> EditarTexto(todo.text, todo.id)}
              onOpenModal={onOpenModal}
            />))}
          </TodoList>


        

      <CreateTodoButtom />
        
      {openModal && (
        <Modal>
          <FormTodo/>
        </Modal>
      )}
   

    </>
  );


}

export { AppUI }