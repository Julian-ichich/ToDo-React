import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../ReactContext'
function TodoCounter(){
    const {completedTodo, todos} = React.useContext(TodoContext)
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodo.length}</span> de <span>{todos.length}</span> TO-DOs
        </h1>
    )
}

export {TodoCounter}