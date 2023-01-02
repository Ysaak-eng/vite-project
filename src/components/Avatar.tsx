  import styles from './Avatar.module.css';
  import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>  {
  falseBorder?:boolean
}

  export function Avartar({falseBorder  = true , ...props}:AvatarProps){
    
    return(
        <img className={falseBorder ? styles.avatarWithBorder : styles.Avatar} {...props} alt="Avatar do personagem" />
    )
}