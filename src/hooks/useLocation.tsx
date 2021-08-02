import React, {useState, useEffect, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [hasLocation, sethasLocation] = useState(false);

  const [routeLines, setRouteLines] = useState<Location[]>([]);

  const [initialLocation, setInitialLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0,
  });

  const watchId = useRef<number>();
  const isMounted = useRef(true);

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialLocation(location);
      setUserLocation(location);
      setRouteLines(routes => [...routes, location]);
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
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        if (!isMounted.current) return;

        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        setUserLocation(location);
        setRouteLines(routes => [...routes, location]);
      },
      err => console.log(err),
      {enableHighAccuracy: true, distanceFilter: 2},
    );
  };

  const stopFollowUserLocation = () => {
    if (watchId.current) Geolocation.clearWatch(watchId.current);
  };

  return {
    hasLocation,
    initialLocation,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  };
};
