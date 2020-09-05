import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import  Tab1  from '../../src/screen/Tab1/Tab1';

const Stack = createStackNavigator<Tab1NavigatorParamList>();

const Tab1Navigator = () => {

	return (
		<Stack.Navigator
			initialRouteName="Tab1"
			screenOptions={{
				gestureEnabled: true,
				cardOverlayEnabled: true,
				...TransitionPresets.ModalPresentationIOS
			}}
			mode="modal"
			headerMode="none"
		>
			<Stack.Screen
				name="Tab1"
				options={{ headerShown: false }}
			>
				{() => <Tab1 />}
			</Stack.Screen>

		</Stack.Navigator>
	);

}

export default Tab1Navigator