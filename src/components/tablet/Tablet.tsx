import { FunctionComponent } from 'react'
import { AppPane } from './AppPane'
import { Navigation } from './Navigation'
import { Status } from './Status'
import { Route, Switch } from 'react-router-dom'
import styles from './styles/main.module.scss'

export type TApp = any
export type TTablet = {
  isRouted?: boolean
  apps?: TApp[]
}

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AppPane />
      </Route>
    </Switch>
  )
}

export const Tablet: FunctionComponent<TTablet> = (
  {
    apps,
    isRouted
  }
) => {
  return (
    <div className={styles.tablet}>
      <Status />
      <ContentRouter />
      <Navigation />
    </div>
  )
}