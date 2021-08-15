import { FunctionComponent } from 'react'
import { AppPane } from './AppPane'
import { Navigation } from './Navigation'
import { Status } from './Status'

export const Tablet: FunctionComponent = () => {
  return (
    <div>
      <Status />
      <AppPane />
      <Navigation />
    </div>
  )
}