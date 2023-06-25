import { StyleSheet, Text, View } from 'react-native';

export default function News() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>News</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ddf',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	}
});
