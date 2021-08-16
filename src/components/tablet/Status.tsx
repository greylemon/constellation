import { useState } from 'react'
import { useInterval } from './hooks/async'
import styles from './styles/main.module.scss'
import { getTime } from './tools/time'

const Time = () => {
  const [time, setTime] = useState(getTime())
  useInterval(() => setTime(getTime()), 60 * 1000)
  return (
    <div className={styles.status_collection__time}>
      {time}
    </div>
  )
}

const StatusFirstGroup = () =>  (
  <div>
    <Time />
  </div>
)

export const Status = () => (
  <div className={styles.status}>
    <StatusFirstGroup />
  </div>
)