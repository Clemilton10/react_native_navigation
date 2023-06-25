import { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FruitContext } from '../api/FruitContext';

export default function Feed() {
	const global = useContext(FruitContext);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Feed</Text>
			{global.fruits.map((item, index) => (
				<TouchableOpacity
					key={index}
					onPressOut={() => global.moveUp(index)}
				>
					<Text>
						{index} {item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#faa',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	}
});
