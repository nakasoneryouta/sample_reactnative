import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import  Tab2  from '../../src/screen/Tab2/Tab2';

const Stack = createStackNavigator<Tab2NavigatorParamList>();

const Tab2Navigator = () => {

	return (
		<Stack.Navigator
			initialRouteName="Tab2"
			screenOptions={{
				gestureEnabled: true,
				cardOverlayEnabled: true,
				...TransitionPresets.ModalPresentationIOS
			}}
			mode="modal"
			headerMode="none"
		>
			<Stack.Screen
				name="Tab2"
				options={{ headerShown: false }}
			>
				{() => <Tab2 />}
			</Stack.Screen>

		</Stack.Navigator>
	);

}

export default Tab2Navigator