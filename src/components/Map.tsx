import React, {useRef, useEffect} from 'react';
import MapView from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {
    hasLocation,
    initialLocation,
    getCurrentLocation,
    followUserLocation,
    userLocation,
  } = useLocation();
  const mapViewRef = useRef<MapView>();

  useEffect(() => {
    followUserLocation();
    // return () => {
    //   stopFollowUserLocation();
    // };
  }, []);

  useEffect(() => {
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();

    mapViewRef.current?.animateCamera({
      center: {latitude: latitude, longitude: longitude},
      zoom: 15,
    });
  };

  return (
    <>
      <MapView
        style={{
          flex: 1,
        }}
        ref={el => (mapViewRef.current = el!)}
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
        iconName="body-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
        }}
      />
    </>
  );
};
