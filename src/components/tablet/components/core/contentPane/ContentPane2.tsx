// import { useEffect } from "react"
import { CSSProperties, FunctionComponent, useMemo } from "react"
import AutoSizer, { Size } from "react-virtualized-auto-sizer"
import styles from "./styles/main.module.scss"

type TAppTypes = "app" | "folder"
type TApp = {
  title: string
  type: TAppTypes
}

type TGlobalApp = TApp & { index: number }
type TPage = { [key: string]: TApp }

const App: FunctionComponent<TApp> = ({ title, type }) => {
  return (
    <div>
      {title}
    </div>
  )
}

const Page: FunctionComponent<{ content?: TPage, height: number, width: number }> = 
  ({ content, height, width }) => {
  const inlineStyles: CSSProperties = {
    height,
    width,
    overflow: 'auto'
  }
  return (
    <div style={inlineStyles} className={styles.page}>
      {
        content && Object.keys(content).map((appIndex) => {
          const appContent = content[appIndex]
          return <App {...appContent} />
        })
      }
    </div>
  )
}

const Content: FunctionComponent<Size> = ({ height, width }) => {
  const { rowCount, colCount } = useMemo(() => {
    const widthPixel = `${width}px`
    const heightPixel = `${height}px`

    const bpSmall = styles.breakpoint_small
    const bpMedium = styles.breakpoint_medium
    const bpLarge = styles.breakpoint_large

    let rowCount = 5
    let colCount = 5

    if (widthPixel > bpLarge) {

    } else if(widthPixel > bpMedium) {

    } else if (widthPixel > bpSmall) {

    }
    
    return { rowCount, colCount }
  }, [height, width])

  const apps = useMemo(() => {
    const apps: TGlobalApp[] = [
      {
        title: "Portfolio",
        type: "folder",
        index: 3
      },
      {
        title: "About",
        type: "app",
        index: 30
      },
    ]
    return apps
  }, [])

  /**
   * To make pages, we need to know how to translate app index into 
   * row/column position.
   * 
   * Each page consists of rowCount * colCount page app slots
   * Their placement on the page is index % page app slots
   * 
   * The total number of pages would then be Math.floor(max(index) / ) 
   */
  const { pages, maxPage } = useMemo(
    () => {
      const pageSlots = rowCount * colCount
      
      const pages: { [key: string]: { [key:string]: TApp } } = {}

      let maxPage = 0
      for (let i = 0; i < apps.length; i++) {
        const app = apps[i]
        
        const page = Math.floor(app.index / pageSlots)
        const pageIndex = app.index % pageSlots
        maxPage = Math.max(maxPage, page)

        if (!(page in pages)) pages[page] = {}

        // ! Add offsets over here? 
        pages[page][pageIndex] = {
          title: app.title,
          type: app.type
        }
      }

      return {
        pages,
        maxPage
      }
    }, 
    [
      rowCount, colCount,
      apps  
    ]
  )
  
  const AppComponents = useMemo(() => {
   const Components = []
   
   for (let pageIndex = 0; pageIndex < maxPage; pageIndex++) {
    const content = pages[pageIndex]
    const key = `app-page-${pageIndex}`
    Components.push(
      <Page 
        key={key} 
        content={content} 
        height={height}
        width={width}
      />
    )
   }

   return Components
  }, [
    rowCount, colCount,
    maxPage, pages,
    width, height
  ])

  return (
    <div>
      {AppComponents}
    </div>
  )
}

const ContentContainer = () => (
  <AutoSizer>
    {(props) => <Content {...props} />}
  </AutoSizer>
)

export const AppPane = () => {
  return (
    <div className={styles.appPane}>
      <ContentContainer />
    </div>

  )
}