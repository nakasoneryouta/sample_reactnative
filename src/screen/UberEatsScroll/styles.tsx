import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    scrollContainer:{

    },
    cardContainer:{
        width: 200,
        backgroundColor: 'gray',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabContainer:{
        paddingTop: 100,
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabItem:{
        width: 120,
        height: 44,
        backgroundColor: 'red',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText:{
        color: 'white',
        fontSize: 21,
    }
})

export default styles;