import styles from './styles/main.module.scss';

const Home = () => {

  return (
    <div className={styles.navigation__home} />
  )
} 

const Background = () => {

  return (
    <div className={styles.navigation__background} />
  )
} 

const Return = () => {

  return (
    <div className={styles.navigation__return}/>
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