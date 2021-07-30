import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

export const PermissionScreen = () => {
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    console.log({permissionStatus});
  };

  return (
    <View style={styles.container}>
      <Text>Permission</Text>
      <Button title="GPS" onPress={checkLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
