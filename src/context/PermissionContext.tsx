import React from 'react';
import {createContext, useState} from 'react';
import {PermissionStatus} from 'react-native-permissions';

export interface PermissionState {
  locationStatus: PermissionStatus;
}

export const PermissionInitState: PermissionState = {
  locationStatus: 'unavailable',
};

type PermissionContextProps = {
  permissions: PermissionState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionContext = createContext({} as PermissionContextProps);

export const PermissionProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(PermissionInitState);

  const checkLocationPermission = () => {};
  const askLocationPermission = () => {};

  return (
    <PermissionContext.Provider
      value={{permissions, askLocationPermission, checkLocationPermission}}>
      {children}
    </PermissionContext.Provider>
  );
};
