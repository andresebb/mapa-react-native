import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Map} from '../components/Map';
import Geolocation from '@react-native-community/geolocation';

export const MapScreen = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      error => console.log({error}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Map />
    </View>
  );
};
