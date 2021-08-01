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
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        sethasLocation(true);
      },
      error => console.log({error}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return {
    hasLocation,
    initialLocation,
  };
};
