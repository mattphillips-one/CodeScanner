import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Button title="Camera" onPress={() => router.navigate('/camera')} />
    </View>
  );
}
