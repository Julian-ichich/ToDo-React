import React from "react";

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading]= React.useState(true)
    const [error, setError] = React.useState(false)


    React.useEffect(()=>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem=initialValue
          }else{
            parsedItem= JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
         } catch (error) {
          setLoading(false)
           setError(true)
         }
          
      }, 2000);
    });
    
   
  
    const saveItem=(newItem)=> {
      localStorage.setItem(itemName, JSON.stringify(newItem))
  
      setItem(newItem)
    }
  
    return {item, saveItem, loading, error}
  }

  export {useLocalStorage}



  // import './App.css';

// localStorage.removeItem('TODOS_V1')
// const defaultTodos =[
//   {text: 'cortar cebolla', completed: false, likes:0},
//   {text: 'llorar con la llorona', completed: false, likes:0},
//   {text: 'tomar el curso de intro a react.js', completed: false, likes:0},
//   {text: 'LALALALA', completed: false, likes:0},
//   {text: 'comer', completed: false, likes:0}

// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))


  
  
