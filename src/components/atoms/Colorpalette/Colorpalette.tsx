import React from 'react';
import { View, TouchableOpacity, Text ,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type Props = {
        palleteColor: (color: string) => string
}

const component: React.FC<Props> = ({palleteColor}) => {

        const DATA = ["#FEFFFF","#CBCCCD","#B7B8B9","#A2A3A4","#8E8F90","#797A7B","#515253","#28292A","#131415","#000001",
                        "#005471","#001D60","#31007D","#620078","#690027","#5E0000","#612E00","#444400","#3B4A00","#0F4E00",
                        "#00CFFF","#0047D5","#5500E0","#AE00D6","#E80054","#CD0000","#D66F00","#928F00","#809F00","#00A800",
                        "#00DEFF","#007BFF","#955EF5","#D546EE","#FA4E94","#FF0000","#FFA900","#FCFB00","#CAEE00","#5AD334",
                        "#4EECFF","#67B1FF","#C3A8FF","#F19BFD","#FFA2C5","#FF7E71","#FFCC68","#FAFA55","#E3F95E","#ABEB9A"]

        const [selectPalleteColor, setSelectPalleteColor] = React.useState("")

        const renderItem = (item: string,index: number) => (
                <TouchableOpacity style = {[selectPalleteColor == item ? styles.selectbox : {},{width: 27,height: 27,backgroundColor: item}]} onPress = {() => {palleteColor(item),setSelectPalleteColor(item)}}>
                </TouchableOpacity>
        );

	return (
        <View style = {styles.container}>
                <FlatList
                        numColumns = {10}
                        data={DATA}
                        renderItem={({ item, index }) => renderItem(item,index)}
                />
        </View>
	)

}

const styles = StyleSheet.create({
        container:{
                justifyContent: 'center',
                alignItems: 'center',
        },
        selectbox: {
                borderColor: '#1C1C1E',
                borderWidth: 2,
        }
});

export default React.memo(component);