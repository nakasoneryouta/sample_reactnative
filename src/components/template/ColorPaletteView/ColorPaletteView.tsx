import React from 'react';
import { View, TouchableOpacity, Text ,StyleSheet, Slider} from 'react-native';
import Colorpalette from '../../atoms/Colorpalette/Colorpalette';
import SaveColorPalette from '../../atoms/SaveColorPalette/SaveColorPalette';

type Props = {
}

type SelectCircle = "top" | "bottom"

const component: React.FC<Props> = ({}) => {

	const [opacity, setOpacity] = React.useState(100)
	const [selectCircle , setSelectCircle] = React.useState<SelectCircle>("top")

	const [box1Color,setBox1Color] = React.useState("#ffffff")
	const [box2Color,setBox2Color] = React.useState("#ffffff")

	const [box1Opacity, setBox1Opacity] = React.useState(1)
	const [box2Opacity, setBox2Opacity] = React.useState(1)

	const _onPressColor = (color: string) => {
		if(selectCircle == "top"){
			return setBox1Color(color)
		}else{
			return setBox2Color(color)
		}
	}

	const _onValueChange = (opacity: number) => {
		console.log("aaaa",opacity / 100)
		if(selectCircle == "top"){
			return setBox1Opacity(opacity / 100)
		}else{
			return setBox2Opacity(opacity / 100)
		}
	}

	return (
        <View style = {styles.container}>
                <View style = {styles.editorEreaContainer}>
                        <View style = {styles.circleBigContainer}>
				<View style = {styles.boxContainer}>
                                        <TouchableOpacity onPress = {() => setSelectCircle("top")} style={[styles.box,{backgroundColor: box1Color,opacity: box1Opacity},selectCircle == "top" ? styles.selectbox : {}]}></TouchableOpacity>
                                        <TouchableOpacity onPress = {() => setSelectCircle("bottom")} style={[styles.box2,{backgroundColor: box2Color,opacity: box2Opacity}, selectCircle == "bottom" ? styles.selectbox : {}]}></TouchableOpacity>
				</View>
				<Text style = {styles.circleTitle}>背景色</Text>
                        </View>

                        <View style = {styles.colorPaletteContainer}>
                                <Colorpalette palleteColor = {(color) => {_onPressColor(color)}}/>

                                <View style = {styles.sliderContainer}>
                                        <Text style = {styles.sliderTitle}>透明度</Text>
                                        <Slider
                                                step={1}
                                                maximumValue={100}
                                                style = {{width: '100%'}}
                                                onValueChange={(value) => {setOpacity(value),_onValueChange(value)}}
                                                value={opacity}
                                        />
                                        <Text style = {styles.sliderTitle}>{opacity}%</Text>
                                </View>
                        </View>

                </View>

                <View style = {styles.colorEreaContainer}>
			<SaveColorPalette/>
                </View>
        </View>
	)

}

const BigCircle = 50

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'column',
		height: '100%',
	},
	editorEreaContainer: {
		flex: 6,
		height: 180,
		marginVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	circleTitle:{
		fontWeight: '600',
		fontSize: 17,
		color: "white",
		marginTop: 15,
	},
	circleBigContainer:{
		alignItems: 'center',
		flex: 23,
		marginHorizontal: 20,
	},
	boxContainer:{
		flexDirection: 'row',
		transform: [{ rotate: "90deg" }]
	},
	selectbox: {
		borderColor: 'white',
		borderWidth: 3,
	},
	box: {
		width: BigCircle,
		height: BigCircle * 2,
		overflow: 'hidden',
		borderTopLeftRadius: BigCircle * 1.5,
		borderBottomLeftRadius: BigCircle * 1.5,
	},
	box2: {
		width: BigCircle,
		height: BigCircle * 2,
		overflow: 'hidden',
		borderTopRightRadius: BigCircle * 1.5,
		borderBottomRightRadius: BigCircle * 1.5,
	},
	colorPaletteContainer:{
		flex: 75,
	},
	sliderContainer:{
		width: '80%',
		marginTop: 20,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	sliderTitle:{
		fontWeight: '600',
		fontSize: 17,
		color: 'white',
		marginHorizontal: 4,
	},
	colorEreaContainer:{
		flex: 1,
		height: 80,
		flexDirection: 'row',
		width: '100%'
	},
      });

export default React.memo(component);