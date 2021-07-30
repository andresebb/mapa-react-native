import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionProvider} from './src/context/PermissionContext';
import {Navigator} from './src/navigation/Navigator';

const AppState = ({children}: any) => {
  return <PermissionProvider>{children}</PermissionProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
