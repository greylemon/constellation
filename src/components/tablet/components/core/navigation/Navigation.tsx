import { FunctionComponent } from 'react'
import styles from './Navigation.module.scss'

/**
 * Navigation consists of three buttons
 * - opened app list   : routes to '/openedApps
 * - home       : routes to '/'
 * - return     : routes to previous page - history.goBack()
 *
 * These navigation share similar features
 * The difference is the shape and the routes
 * Return doesn't use a string for a route, rather it uses history to return
 *
 * These buttons require icons. There's already scss prepared
 */
type TRouterButtonTypes = {
  callback?: () => void
  route?: string
}

// const RouterButton: FunctionComponent<TRouterButtonTypes> = (
//   { route, callback }
// ) => {

// }

const OpenedAppListNavigation = () => <div />
const HomeNavigationButton = () => <div />
const ReturnNavigationButton = () => <div />

export const Navigation = () => (
  <div className={styles.navigation}>
    <OpenedAppListNavigation />
    <HomeNavigationButton />
    <ReturnNavigationButton />
  </div>
)
