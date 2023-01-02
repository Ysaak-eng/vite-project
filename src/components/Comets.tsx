import styles from './Coments.module.css'
import imgAvatar from '../assets/Avatar.jpg'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avartar } from './Avatar';
import { useState } from 'react';


interface ComentProps{
content:string;
deleteCommets:(name:string)=> void
}

export function Coments({content  ,deleteCommets}:ComentProps){

    const [likeCount , setLikeCaunt] = useState(0)

    
    function handleLikeCaunt(){
      setLikeCaunt((status)=>{
        return status +1
      })
    }

    function handleDelteCommets(){
        console.log(deleteCommets(content))
    }

return(
  <div className={styles.comment} >
    <Avartar falseBorder={false} src={imgAvatar} />
        <div className={styles.commentBox} >
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>
                     Ysaak Silverios dos Santos
                    </strong>
                    <time title='11 de Maio ás 08:13h ' dateTime='2022-11-12' >Cerca de 1h atrás</time>
                </div>

                <button onClick={handleDelteCommets} > 
                    <Trash size={20}/>
                </button >

            </header>
            <p>{content}
            </p>
        </div>

        <footer>
            <button onClick={handleLikeCaunt}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
          
  </div>
)
}
