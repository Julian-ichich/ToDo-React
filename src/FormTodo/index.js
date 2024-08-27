import React from "react";
import { TodoContext } from "../ReactContext";

function FormTodo(){

    const {setOpenModal, addTodo} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit =(event)=>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel =()=>{
        setOpenModal(false)
    }




    return(
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>ingresa la tarea que desea agregar</label>
          <textarea value={newTodoValue} onChange ={(e)=> setNewTodoValue(e.target.value)} name="textarea" id="textarea" rows="10" cols="50"  placeholder="Escriba su tarea"></textarea>
        </div>
        <button className="form-submit-btn" onClick={()=>onCancel()}>regresar</button>
        <button className="form-submit-btn"  >Agregar</button>
      </form>
    </div>
    )
}

export {FormTodo}