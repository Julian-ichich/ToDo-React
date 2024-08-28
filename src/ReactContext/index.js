import React from "react";
import { useLocalStorage } from "./useLocalStage";
const TodoContext = React.createContext()

function TodoProvider ({children}){ 

 
  const {item:todos, saveItem:saveTodos, loading, error}= useLocalStorage('TODOS_V1', [])
  const {item:contador, saveItem:savecontador}= useLocalStorage('CONTADOR_V1', 0)
  const  [searchValue, setSearchValue] = React.useState('')
  const  [openModal, setOpenModal] = React.useState(false)
  // const [idTodo, setIdTodo] = React.useState(0)
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const [flagValue, setFlagValue] = React.useState(false)
  const [guardarValor, setGuardarValor] = React.useState('')


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

    if(flagValue === false){
      if(text){
        const newTodos = [...todos]
        newTodos.push({text, completed:false, likes:0, id:contador})
        saveTodos(newTodos)
        savecontador(contador+1)
    }


    }else if(flagValue === true){
      if(text){
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === guardarValor)
        newTodos[todoIndex].text = text
        saveTodos(newTodos)
      }

      setFlagValue(false)
      setNewTodoValue('')
    }
    
   
  }

  const EditarTexto=(texto, id)=>{
      setFlagValue(true)
      onOpenModal()
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex((todo) => todo.text === texto && todo.id === id)
      setNewTodoValue(newTodos[todoIndex].text)
      setGuardarValor(newTodos[todoIndex].text)
  }



  const onOpenModal =()=>{
    if(openModal === true){
        setOpenModal(false)

    }else{
        setOpenModal(true)

    }
    setNewTodoValue('')
    flagValue === true ? setFlagValue(false) : setFlagValue(true)
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
            addTodo,
            EditarTexto,
            setNewTodoValue,
            newTodoValue
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}

