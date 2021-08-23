import styles from './Status.module.scss'

/**
 * Status contains three main components
 * - Status
 * - Utilities
 * 
 * Status contains
 * - time
 * - notifications
 * - various side status - wifi, mobile usage, etc
 * 
 * Utilities contains shortcut settings
 * - airplane mode
 * - wifi
 * - etc
 */

export const Time = () => {}
export const Notifications = () => {}
export const SideStatus = () => {}

export const Status = () => <div className={styles.status} />