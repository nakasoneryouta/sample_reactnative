import React from 'react';
import { View } from 'react-native';
import styles from './styles'

type Props = {
   
}

const component: React.FC<Props> = ({}) => {

	return (
        <View style = {{flex: 1, backgroundColor: 'blue'}}>
                <View style = {{width: 100,height: 100}}></View>
        </View>
	)

}

export default React.memo(component);