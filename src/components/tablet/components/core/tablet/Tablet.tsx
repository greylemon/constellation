import { FunctionComponent } from 'react'
import { Navigation } from '../navigation/Navigation'
import { ContentPane } from '../contentPane/ContentPane'
import { Status } from '../status/Status'
import styles from './Tablet.module.scss'

export type TApp = any
export type TTablet = {
  isRouted?: boolean
  apps?: TApp[]
}

/**
 * Tablet should take in custom user preferences and custom apps
 */
export const Tablet: FunctionComponent<TTablet> = () => {
  return (
    <div className={styles.tablet}>
      <Status />
      <ContentPane />
      <Navigation />
    </div>
  )
}
