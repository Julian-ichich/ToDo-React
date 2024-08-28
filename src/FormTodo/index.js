import React from "react";
import { TodoContext } from "../ReactContext";

function FormTodo(){

    const {setOpenModal, addTodo, setNewTodoValue, newTodoValue,setFlagValue, flagValue} = React.useContext(TodoContext)
    

    const onSubmit =(event)=>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    console.log(flagValue)
    const onCancel =()=>{
        setOpenModal(false)
        setFlagValue(false)
        setNewTodoValue('')
    }




    return(
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>ingresa la tarea que desea agregar</label>
          <textarea value={newTodoValue} onChange ={(e)=> setNewTodoValue(e.target.value)} name="textarea" id="textarea" rows="10" cols="50"  placeholder="Escriba su tarea"></textarea>
        </div>
        <div className="form-group-boton">
          <button className="form-submit-btn" onClick={()=>onCancel()}>regresar</button>
          <button className="form-submit-btn"  >{flagValue === true ? 'actualizar' : 'agregar'}</button>
        </div>
        
      </form>
    </div>
    )
}

export {FormTodo}