import styles from './Header.module.css'
import ignitLog from '../assets/Ignite-logo.svg'


  export function Header(){
    return(
        <header className={styles.Header} >
       <img src={ignitLog} alt="" />
        </header>
    )
}