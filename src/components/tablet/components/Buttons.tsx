import { FunctionComponent } from "react"
import styles from '../styles/main.module.scss'

type TRippleButtonProps = {
  onClick: () => void 
}

export const RippleButton: FunctionComponent<TRippleButtonProps> = (
  { 
    onClick,
    children 
  }
) => {
  return (
    <button className={styles.navigation_icon} onClick={onClick}>
      {children}
    </button>
  )
}