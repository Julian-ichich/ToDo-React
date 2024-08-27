import React from "react";
import { TodoICon } from '.'
function DeleteIcon({onDelete}){
    return (
        <TodoICon type='delete' color='gray' onClick={onDelete} />
    )
}

export { DeleteIcon }