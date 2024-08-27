import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/completeIcon';
import { DeleteIcon } from '../TodoIcon/deleteIcon';
import { ContadorLIke } from '../ContadorLikes';
function TodoItem(props){
    return (
      <li className={`TodoItem ${props.completed && "TodoItem-active"}`}>
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        {/* <span className={`Icon Icon-check ${props.completed&& "Icon-check--active"}`} onClick={props.onComplete}>v</span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <ContadorLIke likes={props.likes} onAumentarLikes={props.onAumentarLikes} onDisminuirLikes={props.onDisminuirLikes} />
        {/* <span className="Icon Icon-delete" value ={props.disponible} onClick={props.onDelete}>x</span> */}
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

  
  export {TodoItem}