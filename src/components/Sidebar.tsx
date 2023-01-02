import styles from './Sidebar.module.css';
import avatar from '../assets/Avatar.jpg'
import {PencilLine} from 'phosphor-react'

export  function Sidebar(){
    return(
        <aside  className={styles.sidebar} >
            <img 
            className='styles.cover' 
            src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
            <img className={styles.avatar} src={avatar}/>
            <strong>Ysaak dos Santos</strong>
                <span>Web Developer</span>
            </div>
            <div className={styles.ButtonDiv}>
               <footer>
               <a href="#">
                <PencilLine  fontSize={20} />
                Editar o seu perfil
               </a>
               </footer>
            </div>
        </aside>
    )
}