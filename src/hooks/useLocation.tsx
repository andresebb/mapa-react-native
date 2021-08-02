import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [hasLocation, sethasLocation] = useState(false);

  const [initialLocation, setInitialLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialLocation(location);
      setUserLocation(location);
      sethasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {enableHighAccuracy: true},
      );
    });
  };

  const followUserLocation = () => {
    Geolocation.watchPosition(
      ({coords}) => {
        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        setUserLocation(location);
      },
      err => console.log(err),
      {enableHighAccuracy: true, distanceFilter: 10},
    );
  };

  return {
    hasLocation,
    initialLocation,
    getCurrentLocation,
    followUserLocation,
    userLocation,
  };
};
