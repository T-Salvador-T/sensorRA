
import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import ARView from './components/ARView';

const App = () => {
  return (
    <ViroARSceneNavigator initialScene={{ scene: ARView }} />
  );
};

export default App;