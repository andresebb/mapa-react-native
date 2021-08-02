import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [hasLocation, sethasLocation] = useState(false);
  const [initialLocation, setInitialLocation] = useState<Location>();

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialLocation(location);
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

  return {
    hasLocation,
    initialLocation,
    getCurrentLocation,
  };
};
