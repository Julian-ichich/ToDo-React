import React from 'react';
import './index.css'
function EditarTodo({onEditarTexto}) {
  return (
    <div className='containerbtn'>
        <button className='editarbtn' onClick={()=> onEditarTexto()}>editar</button>
    </div>
  );

  
}

export {EditarTodo}