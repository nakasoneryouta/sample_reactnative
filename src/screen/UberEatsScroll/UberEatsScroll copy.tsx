import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Platform, Alert, ScrollView, Text, ListRenderItemInfo, FlatListProps, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

type Props = {
}

type DATA = {
    tab: string[]
}
const component: React.FC<Props> = ({}) => {

    const carousel = React.useRef<any>(null);

    const WIDTH_SCR = Dimensions.get("screen").width;
    const HEIGHT_SCR = Dimensions.get('screen').height;

    //初期設定
    const ITEM_HEIGHT = 250
    const ITEM_SPEACE = 20
    const ITEM_SIZE = ITEM_HEIGHT + ITEM_SPEACE
    
    const [tabindex, setTabIndex] = React.useState(0)

    const data = ["abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd","abcd"]
    const tabdata = ["tab1","tab2","tab3","tab4","tab5","tab6","tab7","tab8","tab9","tab10","tab11"]

    const sampledata:DATA[] = [{tab: ["data1","data2"]},{tab: ["data2","data3"]},{tab: ["data4","data5"]},{tab: ["data6","data7"]}]



    
    const _renderItem = (item: ListRenderItemInfo<DATA>) => {
        return(
            <>
                {item.item.tab.map((listitem) => {
                    return(
                    <View style = {[styles.cardContainer,{height: ITEM_HEIGHT,marginVertical: ITEM_SPEACE}]}>
                        <Text>{listitem}</Text>
                    </View>

                    )
                })}
            </>
        )
    }

    const _renderTabItem = (item: ListRenderItemInfo<DATA>) => {
        return(
            <View style = {styles.tabItem}>
                <Text style = {styles.tabText}>{item.index + 1}</Text>
            </View>
        )
    }

    const _scrollPosition = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        let offsetY = e.nativeEvent.contentOffset.y // スクロール距離
        let contentSizeHeight = e.nativeEvent.contentSize.height // scrollView contentSizeの高さ

        let itemnumber = Math.floor(offsetY / ITEM_SIZE) //現在スクロール中のアイテムの番号
        console.log(itemnumber)

        // const target = sampledata.find((item) => {
        // });
        if(itemnumber == 4){
            console.log("４番目だよ")
            setTabIndex(1)
        }

        let scrollViewHeight = e.nativeEvent.layoutMeasurement.height // scrollViewの高さ
    
        if (offsetY + scrollViewHeight >= contentSizeHeight) {
          console.log('scrollの終了')
        }
      }
	return (
        <View style = {styles.container}>

            <View style = {styles.tabContainer}>
            <Carousel
                layout="default"
                ref={carousel}
                data={sampledata}
                renderItem={_renderTabItem}
                sliderWidth={WIDTH_SCR}
                itemHeight={HEIGHT_SCR / 50}
                itemWidth={Dimensions.get("screen").width / 3}
                onSnapToItem={(index) => console.log(index)}
                firstItem = {tabindex}
            />
            </View>

            <FlatList
                onScrollAnimationEnd = {() => console.log("")}
				data={sampledata}
				numColumns={1}
				renderItem={_renderItem}
                keyExtractor={(_, index) => `${index}`}
                onScroll = {_scrollPosition}

			/>
        </View>
	)

}

export default React.memo(component);