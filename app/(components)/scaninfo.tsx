import { Modal, View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PropsWithChildren, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

type Props = PropsWithChildren<{
  onClose: () => void;
}>;

export default function ScanInfo({children, onClose}: Props) {
  const translateY = useSharedValue(0);

	const HEIGHT = Dimensions.get('window').height;
  
  const drag = Gesture.Pan().onChange(event => {
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: (0.75 * HEIGHT) - translateY.value
    }
})

  return (
		<GestureDetector gesture={drag}>
			<Animated.View style = {[styles.modalContent, containerStyle]}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Product Info</Text>
					<Pressable onPress={onClose}>
						<MaterialIcons name="close" color="#111" size={22} />
					</Pressable>
				</View>
				{children}
			</Animated.View>
		</GestureDetector>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
	titleContainer: {
    height: 40,
    backgroundColor: '#f9f9f9',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
	title: {
    color: '#111',
    fontSize: 16,
  }
})