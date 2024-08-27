import React from "react";
import { useLocalStorage } from "./useLocalStage";
const TodoContext = React.createContext()

function TodoProvider ({children}){ 

 
  const {item:todos, saveItem:saveTodos, loading, error}= useLocalStorage('TODOS_V1', [])
  const {item:contador, saveItem:savecontador}= useLocalStorage('CONTADOR_V1', 0)
  const  [searchValue, setSearchValue] = React.useState('')
  const  [openModal, setOpenModal] = React.useState(false)
  const [idTodo, setIdTodo] = React.useState(0)


  const completedTodo = todos.filter(todo => todo.completed)
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo=(texto, id)=> {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto && todo.id === id)

    newTodos[todoIndex].completed === true ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo=(texto, idValue)=> {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto && todo.id === idValue)

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const aumentarLikes=(texto, id)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto && todo.id === id)
    newTodos[todoIndex].likes +=1
    saveTodos(newTodos)
  }

  const disminuirLikes=(texto, id)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === texto && todo.id === id)
    if(newTodos[todoIndex].likes > 0){
      newTodos[todoIndex].likes -=1
    }else{
      alert('no puedes disminuir likes')
    }
    saveTodos(newTodos)
  }

  const addTodo=(text)=>{
    if(text){
        const newTodos = [...todos]
        newTodos.push({text, completed:false, likes:0, id:contador})
        saveTodos(newTodos)
        setIdTodo(idTodo+1)
        savecontador(contador+1)
    }
   
  }


  const onOpenModal =()=>{
    if(openModal === true){
        setOpenModal(false)
    }else{
        setOpenModal(true)
    }
  }


    return(
        <TodoContext.Provider
        value={{
            loading,
            error,
            completedTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            todos,
            aumentarLikes,
            disminuirLikes,
            openModal, 
            setOpenModal,
            onOpenModal,
            addTodo
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}

