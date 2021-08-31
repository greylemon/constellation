import { FunctionComponent } from 'react'
import styles from './ContentPane.module.scss'

/**
 * Main component
 *
 * The content pane is made up of several components
 *
 * The main components:
 * - home app pages
 * - opened app
 * - app list
 *
 * These main components uses react router
 *
 * For example:
 * - '/'        : is the home page. It is always open?
 * - '/:appName : is the opened app name
 * - '/apps     : is the app list
 *
 * Home page consists of apps, folders and widgets
 * - folder     : contains apps. No nesting of folders. Uses one grid slot
 * - app        : an application that can be opened, deleted, analyzed. Uses on grid slot
 * - widget     : an app that is directly on the home page such as time, weather
 *
 * With widgets, either the page grid slots or the widget size needs to be restricted.
 * The widget size will be restricted
 */

type TPosition = { x: number; y: number }
type TDimension = TPosition

// App types
type TApp = { name: string; route: string; icon: JSX.Element }
type TWidgetApp = { name: string; dimension: TDimension }
type TFolderApp = { name: string; apps: TApp[] }

// Component props
type TWidgetAppProps = {}
type TFolderAppProps = {}
type TAppProps = {}

type THomePaneProps = {}
type TAppPaneProps = {}
type TAppListPaneProps = {}

type TContentPaneProps = {}

// Content types
export const WidgetApp = () => {}
export const FolderApp = () => {}
export const App = () => {}

export const HomePane = () => {}
export const AppPane = () => {}
export const AppListPane = () => {}

export const ContentPane = () => <div className={styles.contentPane}></div>
