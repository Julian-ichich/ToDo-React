import { TodoContext } from '../ReactContext'
import './CreateTodoButton.css'
import React from 'react'
function CreateTodoButtom(){
    const {onOpenModal} = React.useContext(TodoContext)
    return (
       <button className='CreateTodoButton' onClick={()=>onOpenModal()}>+</button>
    )
}

export {CreateTodoButtom}