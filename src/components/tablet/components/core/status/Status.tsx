import { useState } from 'react'
import { useInterval } from '../../../hooks/async'
import styles from './Status.module.scss'
import { getTime } from '../../../tools/time'

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

// TODO adjust for user timezone
const Time = () => {
  const [time, setTime] = useState(getTime())
  useInterval(() => setTime(getTime()), 60 * 1000)
  return <div className={styles.status_collection__time}>{time}</div>
}

export const Notifications = () => <div />
export const SideStatus = () => <div />

const StatusFirstGroup = () => (
  <div>
    <Time />
    <Notifications />
  </div>
)

export const Status = () => (
  <div className={styles.status}>
    <StatusFirstGroup />
    <SideStatus />
  </div>
)
