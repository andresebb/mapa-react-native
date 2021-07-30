import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {PermissionContext} from '../context/PermissionContext';

export const PermissionScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  return (
    <View style={styles.container}>
      <Text>Permission</Text>
      <Button title="GPS" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
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
