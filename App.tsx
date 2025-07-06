import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
	const [count, setCount] = useState(10);

	return (
		// <View style={[styles.container, styles.otrosEstilos, {backgroundColor: '#000',}]}>
		<View style={styles.container}>
			<Text style={styles.textNormal}>Holis bb</Text>
			<Text style={styles.textHuge}>{count}</Text>

			<Pressable
				style={[styles.floatingButton, styles.floatingButtonRight]}
				onPress={() => {setCount(count + 1)}}
				>
				<Text style={{color: 'white', fontSize: 20}}>+1</Text>
			</Pressable>

			<Pressable
				style={[styles.floatingButton, styles.floatingButtonLeft]}
				onPress={() => {setCount(count - 1)}}
				onLongPress={() => {setCount(0)}}
			>
				<Text style={{color: 'white', fontSize: 20}}>-1</Text>
			</Pressable>

			{/* <TouchableOpacity>
				{/* similar al Pressable pero ya tiene incorporado que pierda opacidad al momento de presionarlo }
				<Text>-1</Text>
			</TouchableOpacity> */}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	textNormal: {
		fontSize: 50,
		fontWeight: "100",
	},

	textHuge: {
		fontSize: 120,
		fontWeight: "100",
	},

	floatingButton: {
		backgroundColor: "#65558F",
		position: "absolute",
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
		bottom: 30,
		right: 30,
	},

	floatingButtonLeft: {
		bottom: 30,
		left: 30,
	},
});
