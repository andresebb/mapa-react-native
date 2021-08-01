import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Map} from '../components/Map';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from './LoadingScreen';

export const MapScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Map />
    </View>
  );
};
