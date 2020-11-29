import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'app/src/config';

const IMAGE_WIDTH = Dimensions.get('window').width * 0.9

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.brown,
		height: 100,
	},
	indicatorStyle: {
		backgroundColor: colors.textBaseColor,
	},
	tabbar: {
		backgroundColor: colors.textBaseColor,
	},
	scene: {
		flex: 1,
	},
})

export default styles;