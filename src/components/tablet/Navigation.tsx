import { useCallback } from 'react';
import { RippleButton } from './components/Buttons';
import styles from './styles/main.module.scss';

const Home = () => {
  const handleClick = useCallback(() => {}, [])
  return (
    <RippleButton onClick={handleClick}>
      <div className={styles.navigation_icon__home} />
    </RippleButton>
  )
} 

const Background = () => {
  const handleClick = useCallback(() => {}, [])
  return (
    <RippleButton onClick={handleClick}>
      <div className={styles.navigation_icon__background} />
    </RippleButton>
  )
} 

const Return = () => {
  const handleClick = useCallback(() => {}, [])
  return (
    <RippleButton onClick={handleClick}>
      <div className={styles.navigation_icon__return}/>
    </RippleButton>
  )
}

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Background />
      <Home />
      <Return />
    </div>
  )
}