import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {hasLocation, initialLocation} = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        style={{
          flex: 1,
        }}
        showsUserLocation
        initialRegion={{
          latitude: initialLocation!.latitude,
          longitude: initialLocation!.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          // image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Este es el titulo"
          description="Soy la descripcion"
        /> */}
      </MapView>
      <Fab
        iconName="airplane-outline"
        onPress={() => console.log('hola ')}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
        }}
      />
    </>
  );
};
