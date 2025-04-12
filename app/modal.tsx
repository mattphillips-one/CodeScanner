import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  const { data, type } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scanned {type} code</Text>
      <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
