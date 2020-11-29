import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { BlurView } from 'expo-blur';

import { images } from '../../../config';
type Props = {
}

const component: React.FC<Props> = ({}) => {

	return (
        <View style = {{flex: 1,position: 'absolute'}}>
                <BlurView tint="dark" intensity={100} style={{alignItems: 'center',justifyContent: 'center',width: '100%',height: '100%',}}>
                <Text style = {{padding: 100,color: 'white'}}>Hello! I am bluring contents underneath</Text>
                </BlurView>
        </View>
	)

}

export default React.memo(component);