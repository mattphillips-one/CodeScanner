import { Stack, useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  const { modalHeader } = useLocalSearchParams<{modalHeader: string}>();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="modal" options={{presentation: 'modal', title: "Scanned Item" }} />
    </Stack>
  );
}
