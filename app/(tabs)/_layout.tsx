import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "home"
				}}
			/>
			<Tabs.Screen
				name="camera"
				options={{ headerShown: false}}
			/>
		</Tabs>
  );
}