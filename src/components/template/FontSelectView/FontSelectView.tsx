import React from 'react';
import { View, StyleSheet, TouchableOpacity ,Text, Dimensions} from 'react-native';

// import {useFonts,TitilliumWeb_400Regular} from '@expo-google-fonts/titillium-web';
// import { AppLoading } from 'expo';
// import { FlatList } from 'react-native-gesture-handler';
// import {Allura_400Regular} from '@expo-google-fonts/allura'
// import {ArchivoBlack_400Regular} from '@expo-google-fonts/archivo-black'
import Carousel from 'react-native-snap-carousel';

type Props = {
}

type DATA = {name: string, lineHeight: number,title: string}

const WIDTH = Dimensions.get('window').width


const component: React.FC<Props> = ({}) => {

        // フォントを設定
        // let [fontsLoaded] = useFonts({
        //         useFonts,
        //         TitilliumWeb_400Regular,
        //         Allura_400Regular,
        //         ArchivoBlack_400Regular

        // });

        const DATA:DATA[] = [{name: "System",lineHeight: 68,title: "標準"},
        {name: "Hiragino Mincho ProN",lineHeight: 64,title: "高級"},
        {name: "Futura",lineHeight: 64,title: "LOUISVITON"},
        {name: "Gill Sans",lineHeight: 64,title: "ロボット"},
        {name: "Courier",lineHeight: 64,title: "ロボット"},
        {name: "American Typewriter",lineHeight: 64,title: "fdsa"},
        {name: "Noteworthy",lineHeight: 70,title: "手書き感"},
        {name: "Savoye LET",lineHeight: 78,title: "筆記体"},
        {name: "Chalkboard SE",lineHeight: 64,title: "ペン"},
        {name: "Bradley Hand",lineHeight: 74,title: "鉛筆"},

        ]

        // if (!fontsLoaded) {
        //         return <AppLoading />;
        // }

        const renderItem = (item: DATA,index:number) => (
                <TouchableOpacity onPress = {() => {}} style = {styles.boxContainer}>
                        <Text style = {[styles.text,{fontFamily: item.name,lineHeight: item.lineHeight}]}>Aa</Text>
                        <Text style = {styles.subtext}>{item.title}</Text>
		</TouchableOpacity>
                
        )

	return (
        <View style = {styles.container}>
                {/* <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({ item, index }) => renderItem(item,index)}
                /> */}

                <Carousel
                        data={DATA}
                        renderItem={({ item, index }) => renderItem(item,index)}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH / 3}
                />
        </View>
	)

}

const styles = StyleSheet.create({
        container:{
                flex: 1,
                alignItems:'center',
                justifyContent: 'center',
                
        },
        boxContainer:{
                width: WIDTH / 3,
                height: WIDTH / 3,
                marginVertical: WIDTH / 8,
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center'
        },
        selectContainer:{
                borderWidth: 1,
                borderColor: 'white',
        },
        text:{
                padding: WIDTH / 25,
                borderRadius: 10,
                fontSize: 54,
                color: 'white',
                borderWidth: 1,
                borderColor: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
        },
        subtext:{
                fontSize: 15,
                color: 'white',
                marginTop: 25,
        }
})

export default React.memo(component);