import React, { FunctionComponent } from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';
import AutoSizer, { Size } from 'react-virtualized-auto-sizer';
import { Provider, ReactReduxContext } from 'react-redux';

const Stars: FunctionComponent<Size> = ({ height, width }) => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Stage height={height} width={width}>
          <Provider store={store}>
            <Layer>
              <Text text="Alfred Lemon" fontSize={100} fill="white" draggable={true}/>
            </Layer>
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  )
}

const AppContainerSizer = () => (
  <AutoSizer>
    {({ height, width }) => (
      <Stars height={height} width={width}/>
    )}
  </AutoSizer>
)

const App = () => (
  <div className="App">
    <AppContainerSizer />
  </div>
)


export default App;
