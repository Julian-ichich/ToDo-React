import { TodoContext } from '../ReactContext'
import './CreateTodoButton.css'
import React from 'react'
function CreateTodoButtom(props){
    const {onOpenModal} = React.useContext(TodoContext)
    return (
       <button className='CreateTodoButton' onClick={()=>onOpenModal()}>+</button>
    )
}

export {CreateTodoButtom}