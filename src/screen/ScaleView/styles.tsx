import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        paddingBottom: 50,
      },
      paragraph: {
        margin: 12,
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Menlo',
        color: 'white',
      },
      button: {
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      circle: {
        backgroundColor: 'turquoise',
        width: 100,
        height: 100,
        borderRadius: 50,
      },
})

export default styles;