import React from 'react';
import './index.css'
import { ReactComponent as SVGLike} from './like.svg'
import { ReactComponent as SVGDislike} from './dislike-svgrepo-com.svg'
function ContadorLIke({likes, onDisminuirLikes, onAumentarLikes}) {
 
  return (
    <div className="App">
     <span className='contador'>{likes}</span>
     <div className='Btn-Likes'>
     <SVGDislike className='btn-dislike' onClick={onDisminuirLikes}/>
      <SVGLike className='btn-like' onClick={onAumentarLikes}/>
     </div>
    </div>
  );

  
}

export {ContadorLIke}