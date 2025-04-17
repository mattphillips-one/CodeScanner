/*
  Problems:
  - Needs better way to handle scans. Currently uses a button to make sure you want to call the API (it costs money!)
  - Needs better UI and flatlist
  - Needs better integration with APIs
*/

/*
  TODO:
  - Set API calls on screen load (currently set for cautious testing)
*/

import { useLocalSearchParams } from 'expo-router';
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getProduct } from '@/services/productCodeAPI';
import { searchContent } from '@/services/guardianAPI';
import { useState } from 'react';
import GuardianLink from '@/components/GuardianLink';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Modal() {
  const { data, type } = useLocalSearchParams<{data: string, type: string}>();
  const [ brandName, setBrandName ] = useState("");
  const [ guardianResponse, setGuardianResponse ] = useState([]);

  async function handleBrandPress(data: string) {
    const response = await getProduct(data);
    const brand = response.properties.brand[0];
    console.log(brand);
    setBrandName(brand);
    handleGuardian(brand);
  }

  async function handleGuardian(searchTerm: string) {
    const result: {results: []} = await searchContent(searchTerm);
    setGuardianResponse(result.results);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Scanned {type} code</Text>
      <Text>{data}</Text>

      <Button
      title='Display Brand'
      onPress={() => handleBrandPress(data)} />

      {!!brandName && (
        <Text style={{fontWeight: 'bold'}}>{brandName}</Text>
      )}

      <FlatList 
        data={guardianResponse}
        renderItem={({item}) => <GuardianLink item={item} />}
      />
    </SafeAreaView>
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
