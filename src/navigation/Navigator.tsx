import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen} from '../screens/MapScreen';
import {PermissionScreen} from '../screens/PermissionScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
