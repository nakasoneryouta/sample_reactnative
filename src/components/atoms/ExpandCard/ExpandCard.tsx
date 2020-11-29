import React from 'react';
import styles from './styles'
import { View, TouchableOpacity ,Animated, Text, Dimensions} from 'react-native';
type Props = {
}

const component: React.FC<Props> = ({}) => {

        const WIDTH = Dimensions.get('window').width
        const HEIGHT = Dimensions.get('window').height

        const WidthAnim = React.useRef(new Animated.Value(WIDTH - 100)).current;
        const HeightAnim = React.useRef(new Animated.Value(WIDTH - 100)).current;
        const moveTop = React.useRef(new Animated.Value(0)).current;

        const [disabled ,setDisabled] = React.useState(false)



        const expand = () => {
        // Animated.timing(WidthAnim, {
        //         toValue: WIDTH,
        //         duration: 500,
        //         useNativeDriver : false,
        // }).start();

        // Animated.timing(HeightAnim, {
        //         toValue: HEIGHT,
        //         duration: 500,
        //         useNativeDriver : false,
        // }).start();


        Animated.sequence([
                // 矢印がy軸に対してプラス(画面上方向)へ移動
                Animated.timing(moveTop, {
                  toValue: -345,
                  duration: 500,
                useNativeDriver : false,
                }),

                Animated.timing(WidthAnim, {
                        toValue: WIDTH,
                        duration: 500,
                        useNativeDriver : false,
                }),
                Animated.timing(HeightAnim, {
                        toValue: HEIGHT,
                        duration: 500,
                        useNativeDriver : false,
                }),
              ]).start((event) => {
                if (event.finished) {
                  expand();
                }
              });
        }

	return (
        <View style={{width: '100%',alignItems: 'center'}} ref = {(aaa) => {console.log("要素",aaa)}}>
                <TouchableOpacity onPress={() => {expand(),setDisabled(true)}} disabled = {disabled}>
                        <Animated.View
                            style={[styles.cardContainer,{width: WidthAnim,height: HeightAnim,top: moveTop}]}
                        >
                        </Animated.View>
                </TouchableOpacity>
        </View>
	)

}

export default React.memo(component);