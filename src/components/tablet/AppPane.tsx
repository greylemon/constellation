import { useEffect } from "react"
import { FunctionComponent, useMemo } from "react"
import AutoSizer, { Size } from "react-virtualized-auto-sizer"
import styles from "./styles/main.module.scss"

type TPosition = { x: number, y: number }
type TAppTypes = "app" | "folder"
type TApp = {
  title: string
  type: TAppTypes
  position: TPosition
}

const App: FunctionComponent<TApp> = ({ title, type }) => {
  return (
    <div>
      {title}
    </div>
  )
}

const Content: FunctionComponent<Size> = ({ height, width }) => {
  const pageCount = useMemo(() => {

  }, [height, width])

  // const mockApps = useMemo(() => {
  //   const apps: TApp[] = [
  //     {
  //       title: "Portfolio",
  //       type: "folder",
  //       position: { x: 3, y: 3 }
  //     }
  //   ]
  // }, [])

  return (
    <div>
    </div>
  )
}

export const AppPane = () => {
  return (
    <div className={styles.appPane}>
      <AutoSizer>
        {(props) => <Content {...props} />}
      </AutoSizer>
    </div>

  )
}