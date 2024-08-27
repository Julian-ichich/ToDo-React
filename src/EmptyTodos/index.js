import React from "react";
import {ReactComponent as SVGVacio} from './fileempty_120151.svg'
import './index.css'
function EmptyTodos(){
    return(
        <div className="containerVacio">
             <SVGVacio className="containerVacio2"/>
        </div>
      
    )
}

export{EmptyTodos}