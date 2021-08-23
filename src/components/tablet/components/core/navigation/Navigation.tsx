import styles from './Navigation.module.scss'

/**
 * Navigation consists of three buttons
 * - app list   : routes to '/apps
 * - home       : routes to '/'
 * - return     : routes to previous page - history.goBack()
 * 
 * These navigation share similar features
 * The difference is the shape and the routes
 * Return doesn't use a string for a route, rather it uses history to return
 * 
 * These buttons require icons. There's already scss prepared
 */
const AppListNavigation = () => {}
const HomeNavigationButton = () => {}
const ReturnNavigationButton = () => {}

export const Navigation = () => <div className={styles.navigation} />