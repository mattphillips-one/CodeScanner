import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import React from "react";
import { useRouter } from "expo-router";


const CameraScreen = () => {
  const [ permission, requestPermission ] = useCameraPermissions();
  const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
  const [ barcodeData, setBarcodeData ] = useState("")

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

  function handleScan(result: BarcodeScanningResult) {
    const { data, type} = result;
    setIsModalVisible(true);
    //setBarcodeData(scannedData);
    router.push({
      pathname: "../modal",
      params: {
        data: data,
        type: type,
        modalHeader: `Scanned ${type}`
      }
    });
  }

  const onModalClose = () => {
    setIsModalVisible(false);
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

// <ScanInfo isVisible={isModalVisible} barcode={barcodeData} onClose={onModalClose}/>

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