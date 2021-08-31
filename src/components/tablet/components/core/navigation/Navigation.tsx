import { useCallback } from 'react'
import { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTE_OPENED_APPS, ROUTE_ROOT } from '../../../config/routes'
import { RippleButton } from './RippleButtons'
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
  className: string
}

const RouterButton: FunctionComponent<TRouterButtonTypes> = ({
  route,
  callback,
  className,
}) => {
  const history = useHistory()
  const handleClick = useCallback(() => {
    if (callback) return callback

    if (route) return () => history.push(route)
  }, [route, callback, history])
  return (
    <RippleButton onClick={handleClick}>
      <div className={className} />
    </RippleButton>
  )
}

const OpenedAppListNavigation = () => (
  <RouterButton
    className={styles.navigation_icon__background}
    route={ROUTE_OPENED_APPS}
  />
)

const HomeNavigationButton = () => (
  <RouterButton className={styles.navigation_icon__home} route={ROUTE_ROOT} />
)

const ReturnNavigationButton = () => {
  const history = useHistory()
  const handleClick = useCallback(() => history.goBack(), [history])
  return (
    <RouterButton
      className={styles.navigation_icon__return}
      callback={handleClick}
    />
  )
}

export const Navigation = () => (
  <div className={styles.navigation}>
    <OpenedAppListNavigation />
    <HomeNavigationButton />
    <ReturnNavigationButton />
  </div>
)
