import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Platform, Alert, ScrollView, Text, ListRenderItemInfo, FlatListProps, Dimensions, NativeScrollEvent, NativeSyntheticEvent, ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

type Props = {
}

interface Menu {
    title: string;
    menu: string
}

const component: React.FC<Props> = ({}) => {

    const carousel = React.useRef<any>(null);
    const flatlist = React.useRef<any>(null);

    const WIDTH_SCR = Dimensions.get("screen").width;
    const HEIGHT_SCR = Dimensions.get('screen').height;

    //初期設定
    const ITEM_HEIGHT = 250
    const ITEM_SPEACE = 20
    
    const [tabindex, setTabIndex] = React.useState(0)

    const meniTitles = ['Menu1','Menu2','Menu3','Menu4',]

    const menus: Menu[] = [
        {
            title: 'Menu1-1',
            menu: 'Menu1'
        },
        {
            title: 'Menu1-2',
            menu: 'Menu1'
        },
        {
            title: 'Menu1-3',
            menu: 'Menu1'
        },
        {
            title: 'Menu2-1',
            menu: 'Menu2'
        },
        {
            title: 'Menu2-2',
            menu: 'Menu2'
        },
        {
            title: 'Menu3-1',
            menu: 'Menu3'
        },
        {
            title: 'Menu3-2',
            menu: 'Menu3'
        },
        {
            title: 'Menu3-3',
            menu: 'Menu3'
        },
        {
            title: 'Menu3-4',
            menu: 'Menu3'
        },
        {
            title: 'Menu4-1',
            menu: 'Menu4'
        },
        {
            title: 'Menu4-2',
            menu: 'Menu4'
        },
        {
            title: 'Menu4-3',
            menu: 'Menu4'
        },
        {
            title: 'Menu4-4',
            menu: 'Menu4'
        }
    ]

    const _renderItem = (item: ListRenderItemInfo<Menu>) => {
        return(
            <View style = {[styles.cardContainer,{height: ITEM_HEIGHT,marginVertical: ITEM_SPEACE}]}>
                <Text>{item.item.title}</Text>
            </View>
        )
    }

    const _renderTabItem = (item: ListRenderItemInfo<string>) => {
        return(
            <TouchableOpacity style={styles.tabItem} onPress={() => onPressTab(item.item)}>
                <Text style = {styles.tabText}>{item.item}</Text>
            </TouchableOpacity>
        )
    }

    const onPressTab = (v: string) => {
        const index = menus.findIndex(item => item.menu == v);
        if (index >= 0) {
            flatlist.current?.scrollToIndex({index: index, animated:  true})
        }
    }

    const handleViewableItemsChanged = (info: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => {
        if (info.viewableItems && info.viewableItems.length > 0 && info.viewableItems[0].item && info.viewableItems[0].item.menu) {
            const menuTitle = info.viewableItems[0].item
            const index = meniTitles.findIndex(item => item == menuTitle.menu)
            setTabIndex(index)
        }

    };

    const viewabilityConfigCallbackPairs = React.useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 50,
        viewAreaCoveragePercentThreshold: 50,
        waitForInteraction: true,
      },
      onViewableItemsChanged: handleViewableItemsChanged,
    },
  ]);

	return (
        <View style = {styles.container}>

            <View style = {styles.tabContainer}>
            <Carousel
                layout="default"
                ref={carousel}
                data={meniTitles}
                renderItem={_renderTabItem}
                sliderWidth={WIDTH_SCR}
                itemHeight={HEIGHT_SCR / 50}
                itemWidth={Dimensions.get("screen").width / 3}
                onSnapToItem={(index) => console.log(index)}
                firstItem = {tabindex}
            />
            </View>

            <FlatList
                ref={flatlist}
                onScrollAnimationEnd={() => console.log("")}
                data={menus}
                numColumns={1}
                renderItem={_renderItem}
                keyExtractor={(_, index) => `${index}`}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onEndReached={() => setTabIndex(meniTitles.length - 1)}
			/>
        </View>
	)

}

export default component;