// FAB: Floating Action Button

import { Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
	label: string;
	position?: "left" | "right";

	// Methods
	onPress?: () => void;
	onLongPress?: () => void;
}

export default function FAB({
	label,
	onPress,
	onLongPress,
	position = "right",
}: Props) {
	return (
		<>
			<Pressable
				style={({pressed}) => [
					styles.floatingButton,
					position === "right"
						? styles.floatingButtonRight
						: styles.floatingButtonLeft,
					pressed ? { opacity: 0.7 } : { opacity: 1 },
				]}
				onPress={onPress}
				onLongPress={onLongPress}
			>
				<Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
			</Pressable>

			{/*
            <Pressable
				style={[styles.floatingButton, styles.floatingButtonLeft]}
				onPress={() => {setCount(count - 1)}}
				onLongPress={() => {setCount(0)}}
                >
				<Text style={{color: 'white', fontSize: 20}}>-1</Text>
			</Pressable>
            
			<TouchableOpacity>
            {/* similar al Pressable pero ya tiene incorporado que pierda opacidad al momento de presionarlo }
            <Text>-1</Text>
			</TouchableOpacity> */}
		</>
	);
}

const styles = StyleSheet.create({
	floatingButton: {
		backgroundColor: "#65558F",
		position: "absolute",
		bottom: 30,
		padding: 20,
		borderRadius: 15,
		shadowColor: "#000", // solo para IOS
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 3, // solo para Android
	},

	floatingButtonRight: {
		right: 30,
	},

	floatingButtonLeft: {
		left: 30,
	},
});
