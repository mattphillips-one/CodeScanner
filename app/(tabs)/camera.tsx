import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import ScanInfo from '../(components)/scaninfo';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const CameraScreen = () => {
  const [ permission, requestPermission ] = useCameraPermissions();
  const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
  const [ barcodeData, setBarcodeData ] = useState("")

  if (!permission) {
    // Camera permissions still loading
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need permission to use camera.</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    )
  }

  function handleScan(data: string) {
    setIsModalVisible(true);
    setBarcodeData(data);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <CameraView
        style={styles.camera}
        facing='back'
        onBarcodeScanned={ ({ data }) => handleScan(data) }
      >
      </CameraView>
      {isModalVisible ? (
        <ScanInfo onClose={onModalClose}>
        <Text>{barcodeData}</Text>
      </ScanInfo>
      ): null}
      
    </GestureHandlerRootView>
  );
}

// <ScanInfo isVisible={isModalVisible} barcode={barcodeData} onClose={onModalClose}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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