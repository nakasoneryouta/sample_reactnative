import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 100,
        flex: 1
    },
    mainTitle:{
        fontSize: 34,
        color: 'white',
        fontWeight: '600',
        paddingLeft: 50
    },
    subTitle:{
        fontSize: 15,
        color: 'white',
        marginTop: 30,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 50,
        marginBottom: 30,
    },
    image:{
        width: WIDTH,
        height: WIDTH,
        backgroundColor: 'red'
    }
})

export default styles;