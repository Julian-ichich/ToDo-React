import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../ReactContext'
function TodoSearch(){
 const {searchValue, setSearchValue}= React.useContext(TodoContext)
    return (
        <input 
        placeholder="cortar cebolla"
        className="TodoSearch" 
        value={searchValue} 
        onChange={(event)=> {
           setSearchValue(event.target.value) 
        }}/>
    )
}

export {TodoSearch}