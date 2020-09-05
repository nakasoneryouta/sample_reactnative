import { StyleSheet, Dimensions } from 'react-native';

const PHOTOWIDTH = Dimensions.get('screen').width
const AUX_SIZE = PHOTOWIDTH / 3

const styles = StyleSheet.create({
    auxcell: {
        width: AUX_SIZE,
        height: AUX_SIZE,
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'white',
    }
})

export default styles;