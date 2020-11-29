import React from 'react';
import { View, Dimensions ,StyleSheet, Text} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


type Props = {
  tabs: any[];
}


const component: React.FC<Props> = ({ tabs }) =>{


	const initialLayout = { width: Dimensions.get('window').width };

	const [index, setIndex] = React.useState(0);

	const [routes] = React.useState(
		tabs.map(item => {
			return {
			  key: item.key,
			  title: item.title,
			}
		})
	);


	const renderScene = SceneMap(
		tabs.reduce((obj, item) => ({...obj, [item.key]: item.scene}), {})
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			swipeEnabled = {false}
			renderTabBar={props => (
				<TabBar
				  {...props}
				  activeColor = {'red'}
				  indicatorStyle={styles.indicatorStyle}
				  style={styles.normalStyle}
				  labelStyle = {styles.labelStyle}
				  renderLabel={({ route, focused }) => {return(
					<View>
					<Text
					  style={[styles.labelStyle, focused ? styles.activeTabTextColor : styles.tabTextColor]}
					>
					  {route.title}
					</Text>
				  </View>
				  )}}
				/>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	indicatorStyle: {
		backgroundColor: 'white'
	},
	normalStyle:{
		backgroundColor: '#212223'
	},
	labelStyle:{
		fontWeight: 'bold',
		fontSize: 17
	},
	activeTabTextColor:{
		color: 'white',
	},
	tabTextColor:{
		color: "#9FA2A9"
	}
})

export default component;