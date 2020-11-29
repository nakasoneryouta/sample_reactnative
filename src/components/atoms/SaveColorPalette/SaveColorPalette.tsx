import React from 'react';
import { View, TouchableOpacity ,StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors, images } from '../../../config';

type Props = {
        saveColors: (colors: Colors) => void
}

type Colors = {color1: string, color2: string}

const component: React.FC<Props> = ({saveColors}) => {

        const DATA:Colors[] = [
                {color1: "#5AC8FA",color2: "#00CFFF"},
                {color1: "#007AFF",color2: "#0047D5"},
                {color1: "#5856D6",color2: "#551FE0"},
                {color1: "#AF52DE",color2: "#AE1DD6"},
                {color1: "#FF2D55",color2: "#E80454"},
                {color1: "#FF3B30",color2: "#CD0000"},
                {color1: "#FF9500",color2: "#D66F00"},
                {color1: "#FFCC00",color2: "#928F00"},
                {color1: "#34C759",color2: "#00A800"}]

        const renderItem = (colors: Colors,index: number) => (
                <TouchableOpacity onPress = {() => saveColors(colors)} style = {styles.boxContainer}>
                        <View style={[styles.box,{backgroundColor: colors.color1}]}></View>
                        <View style={[styles.box2,{backgroundColor: colors.color2}]}></View>
		</TouchableOpacity>
        );

	return (
        <View style = {styles.container}>

                <TouchableOpacity style = {styles.addColorContainer}>
                        <Image source = {images.addColor} style = {styles.addColor}/>
                </TouchableOpacity>

                <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({ item, index }) => renderItem(item,index)}
                />
        </View>
	)

}

const BigCircle = 20

const styles = StyleSheet.create({
        container:{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 20,
        },
        itemContainer:{
                width: 45,
                height: 45,
                borderRadius: 30,
                margin: 10,
                backgroundColor: 'black',
                borderColor: '#212223',
                borderWidth: 1,

        },
        boxContainer:{
		flexDirection: 'row',
                transform: [{ rotate: "90deg" }],
                margin: 15,
        },
        addColorContainer:{
                margin: 10,
        },
        addColor: {
                width: 38,
                height: 38,
        },
        box: {
		width: BigCircle,
		height: BigCircle * 2,
		overflow: 'hidden',
		backgroundColor: '#FECD00',
		borderTopLeftRadius: BigCircle * 1.5,
		borderBottomLeftRadius: BigCircle * 1.5,
	},
	box2: {
		width: BigCircle,
		height: BigCircle * 2,
		overflow: 'hidden',
		backgroundColor: '#FC3B31',
		borderTopRightRadius: BigCircle * 1.5,
		borderBottomRightRadius: BigCircle * 1.5,
	},
});

export default React.memo(component);