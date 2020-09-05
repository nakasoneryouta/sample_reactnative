import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<MainTabParamList, 'Splash'>;
type Props = {
     navigation: NavigationProp;
}

const component: React.FC<Props> = ({navigation}) => {

        React.useEffect(() => {
        setTimeout(
                () => {
                        navigation.replace('BottomNavigator')
                },
                1500,
        )
  	}, [])

	return (
        <View style = {{flex: 1,backgroundColor: 'red'}}>
                <View style = {{width: 100,height: 100,backgroundColor: 'green'}}></View>
        </View>
	)

}

export default React.memo(component);