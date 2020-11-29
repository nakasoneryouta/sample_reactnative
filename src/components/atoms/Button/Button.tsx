import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Dimensions ,Animated} from 'react-native';

type Props = {
}

const component: React.FC<Props> = ({}) => {

        const WIDTH = Dimensions.get('window').width
        const WidthAnim = React.useRef(new Animated.Value(WIDTH)).current;

        const animation = () => {
                Animated.sequence([
                        // 矢印がy軸に対してプラス(画面上方向)へ移動
                        Animated.timing(WidthAnim, {
                          toValue: 300,
                          duration: 200,
                          useNativeDriver : false,
                        }),
                      ]).start((event) => {
                        if (event.finished) {
                                animation()
                        }
                });
        }


	return (
        <TouchableOpacity onPressIn = {() => animation()}>
                <Animated.View
                        style={[styles.cardContainer,{width: WidthAnim}]}
                >
                </Animated.View>
        </TouchableOpacity>
	)

}

export default React.memo(component);