import React from 'react';
import { View, TouchableOpacity, Text ,StyleSheet, Slider, Platform, Dimensions} from 'react-native';
import SaveColorPalette from '../../atoms/SaveColorPalette/SaveColorPalette';
import {HueSlider,SaturationSlider,LightnessSlider} from 'react-native-color';
import tinycolor from 'tinycolor2';
import Colorpalette from '../../atoms/Colorpalette/Colorpalette';

type Props = {
}

type Parts = "top" | "bottom"

const component: React.FC<Props> = ({}) => {

        const [parts , setParts] = React.useState<Parts>("top")

        const [ state , setState] = React.useState({color: tinycolor('#70c1b3').toHsl()})
        const [ state2 , setState2] = React.useState({color: tinycolor('#70c1b3').toHsl()})

        const _updateHue = (h:string) => {
                if(parts == 'top'){
                        return setState({ color: { ...state.color, h } });
                }else{
                        return setState2({ color: { ...state2.color, h } });
                }
        }
        const _updateSaturation = (s:string) => {
                if(parts == 'top'){
                        return setState({ color: { ...state.color, s } });
                }else{
                        return setState2({ color: { ...state2.color, s } });
                }
        }
        const _updateLightness = (l:string) => {
                if(parts == 'top'){
                        return setState({ color: { ...state.color, l } });
                }else{
                        return setState2({ color: { ...state2.color, l } });
                }
        }

	return (
        <View style = {styles.container}>
                <View style = {styles.editContainer}>
                        <View style = {styles.circleBigContainer}>
                                <View style = {styles.boxContainer}>
                                        <TouchableOpacity onPress = {() => setParts("top")} style={[styles.box,{backgroundColor:tinycolor(state.color).toHslString()},parts == "top" ? styles.selectbox : {}]}></TouchableOpacity>
                                        <TouchableOpacity onPress = {() => setParts("bottom")} style={[styles.box2,{backgroundColor:tinycolor(state2.color).toHslString()}, parts == "bottom" ? styles.selectbox: {}]}></TouchableOpacity>
                                </View>

                                <View style = {styles.circleTitleContainer}>
                                        <Text style = {[styles.circleTitle, parts == 'top' ? styles.activeTitleColor : styles.normalTitleColor]}>背景色</Text>
                                        <Text style = {styles.circleTitle}> / </Text>
                                        <Text style = {[styles.circleTitle, parts == 'bottom' ? styles.activeTitleColor : styles.normalTitleColor]}>フォント</Text>
                                </View>
                        </View>

                        <View style = {styles.colorPaletteContainer}>
                                <View style = {styles.slderContainer}>
                                        <Text style={styles.componentText}>{'色相'}</Text>
                                        <HueSlider
                                        useNativeDriver={true}
                                        style={styles.sliderRow}
                                        gradientSteps={40}
                                        value={parts == 'top' ? state.color.h : state2.color.h}
                                        onValueChange={_updateHue}
                                        />
                                </View>
                                <View style = {styles.slderContainer}>
                                <Text style={styles.componentText}>{'透度'}</Text>
                                        <SaturationSlider
                                        style={styles.sliderRow}
                                        gradientSteps={20}
                                        value={parts == 'top' ? state.color.s : state2.color.s}
                                        color={parts == 'top' ? state.color : state2.color}
                                        onValueChange={_updateSaturation}
                                        />
                                </View>
                                <View style = {styles.slderContainer}>
                                        <Text style={styles.componentText}>{'明度'}</Text>
                                        <LightnessSlider
                                        style={styles.sliderRow}
                                        gradientSteps={20}
                                        value={parts == 'top' ? state.color.l : state2.color.l}
                                        color={parts == 'top' ? state.color : state2.color}
                                        onValueChange={_updateLightness}
                                        />
                                </View>
                        </View>
                </View>

                <View style = {styles.colorEreaContainer}>
			<SaveColorPalette saveColors = {(colors) => {setState({color: tinycolor(colors.color1).toHsl()}),setState2({color: tinycolor(colors.color2).toHsl()})}}/>
                </View>
        </View>
	)

}

const BigCircle = 50

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container:{
		flex: 1,
                height: '100%',
                paddingVertical: HEIGHT / 40,
        },
        editContainer: {
                flex: 1,
		flexDirection: 'row',
		height: '100%',
        },
	circleTitle:{
                color: 'white',
		fontWeight: '600',
		fontSize: 15,
		marginTop: 15,
        },
        normalTitleColor: {
                color: '#9FA2A9',
                fontSize: 10,
        },
        activeTitleColor:{
                color: 'white'
        },
        circleTitleContainer:{
                flexDirection: 'row',
                alignItems: 'flex-end',
        },
	circleBigContainer:{
		alignItems: 'center',
		marginHorizontal: HEIGHT / 40,
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
                alignItems: 'flex-start',
                display: 'flex',
                width: '53%',
                paddingRight: WIDTH / 20
	},
	colorEreaContainer:{
                marginVertical: HEIGHT / 40,
                flex: 1,
		flexDirection: 'row',
		width: '100%'
        },
        slderContainer:{
                display: 'flex',
                flexDirection: 'row',
        },
        componentText: {
                marginTop: 16,
                color: 'white',
                fontSize: 16,
                lineHeight: 21,
                ...Platform.select({
                        android: {
                        fontFamily: 'sans-serif-medium'
                        },
                        ios: {
                        fontWeight: '600',
                        letterSpacing: -0.408
                        }
                })
        },
        sliderRow: {
                alignSelf: 'stretch',
                marginLeft: 12,
                marginTop: 12,
                width: '100%'
        },
      });

export default React.memo(component);