/*
 Problems:
 - Camera needs to unmount when modal popup is showing
 - Barcode scanning will spam as long as a code is in front of camera
 - Could use a better UI instead of just a full-screen camera
*/


import { Button, StyleSheet, Text, View } from 'react-native';
import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import React from "react";
import { useRouter } from "expo-router";


const CameraScreen = () => {
  const [ permission, requestPermission ] = useCameraPermissions();

  const router = useRouter();

  if (!permission) {
    // Camera permissions still loading
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need permission to use camera.</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    )
  }

  // Navigates to modal popup
  function handleScan(result: BarcodeScanningResult) {
    const { data, type} = result;
    router.push({
      pathname: "../modal",
      params: {
        data: data,
        type: type
      }
    });
  }

  return (
    <CameraView
      style={styles.camera}
      facing='back'
      onBarcodeScanned={ (result) => handleScan(result) }
    >
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraScreen;