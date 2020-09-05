import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab1Navigator from '../navigations/Tab1Navigator';
import Tab2Navigator from '../navigations/Tab2Navigator';


import  images  from '../config/images';
import Tab1 from '../screen/Tab1/Tab1';
import Tab2 from '../screen/Tab2/Tab2';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {


	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false
			}}
		>
			<Tab.Screen name="Tab1" component={Tab1} />
			<Tab.Screen name="Tab2" component={Tab2} />
			{/* <Tab.Screen
				name="Tab1"
				component={Tab1}
				options={{
					tabBarIcon: ({ focused, size }) => (
						<Image source={focused ? images.tab1 : images.tab1} style={{width: size, height: size}} />
					),
				}}

			/>
			<Tab.Screen
				name="Tab2"
				component={Tab2}
				options={{
					tabBarIcon: ({ focused, size }) => (
						<Image source={focused ? images.tab1 :images.tab2} style={{width: size, height: size}} />
					),
				}}
			/> */}

		</Tab.Navigator>
	)

}

export default BottomNavigator;