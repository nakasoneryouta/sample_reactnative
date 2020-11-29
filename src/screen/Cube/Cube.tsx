import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Text, Image ,TouchableWithoutFeedback, Dimensions} from 'react-native';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation'
import Animated from 'react-native-reanimated';
import { images } from '../../config';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
}

const component: React.FC<Props> = ({}) => {


    const { width, height } = Dimensions.get("window");
    const [cube ,setCube ] = React.useState()
    const [pageindex, setPageIndex] = React.useState(1)

    const goToNext = () => {
        cube.scrollTo(pageindex);
        setPageIndex(pageindex + 1)
      };

    // const callBackAfterSwipe = (pos:any) => {
    //     if (Math.abs(pos) === width * 3) {
    //       //this.state.move.setValue(400)
    //       Animated.timing(move, {
    //         toValue: 230,
    //         duration: 4000,
    //         delay: 100,
    //       }).start();
    //     }
    //   };

	return (
        <View style={styles.father} >
        <CubeNavigationHorizontal ref={(view:any) => { setCube(view) }}>

            <ScrollView style={[styles.container, { backgroundColor: '#5CDB8B' ,width: '100%',height : 1000}]}>
                <Text style={styles.text}>Horizontal Page 1</Text>
                <TouchableOpacity onPress = {() => {goToNext()}}>
                    <View style = {{width: 100,height: 1000,backgroundColor: 'red'}}></View>
                    <View style = {{width: 100,height: 1000,backgroundColor: 'gray'}}></View>

                </TouchableOpacity>
                
            </ScrollView>
            <View style={[styles.container, { backgroundColor: '#5CDB8B' }]}>
                <Text style={styles.text}>Horizontal Page 2</Text>
                <TouchableOpacity onPress = {() => {goToNext()}}>
                    <View style = {{width: 100,height: 100,backgroundColor: 'red'}}></View>
                </TouchableOpacity>
            </View>
            <View style={[styles.container, { backgroundColor: '#5CDB8B' }]}>
                <Text style={styles.text}>Horizontal Page 3</Text>
                <TouchableOpacity onPress = {() => {goToNext()}}>
                    <View style = {{width: 100,height: 100,backgroundColor: 'red'}}></View>
                </TouchableOpacity>
            </View>
        </CubeNavigationHorizontal>
        </View >
    )



}

export default React.memo(component);