import React from 'react';
import styles from './styles'
import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { images } from '../../config';
import Carousel, { Pagination } from 'react-native-snap-carousel';

type Props = {
}

const component: React.FC<Props> = ({}) => {

        const [activeIndex, setActiveIndex] = React.useState(0);
        const items = [
                {image: images.guide_1,title: "写真から探す",subtitle: "HAMONIは一番近くの美味しい料理を写真から探せるサービスです。"},
                {image: images.guide_2,title: "料理を記録",subtitle: "美味しい料理をHAMONIに登録しましょう。アルバムに眠った料理を投稿しよう。"},
                {image: images.guide_3,title: "正しい評価",subtitle: "投稿に対して８項目の評価GOODとBADでお店の正確な評価が目に見えてわかります。"},
        ]

        const _renderItem = (item: any) => {
                {console.log(item)}
                return (
                <View>
                    <Text style = {styles.mainTitle}>{item.item.title}</Text>
                    <Text style = {styles.subTitle}>{item.item.subtitle}</Text>
                    <Image source={item.item.image}  style = {styles.image}/>
                </View>
                );
        }


	return (
        <View style= {styles.container}>
                <View>
                        {/* <Text style = {styles.mainTitle}>写真から探す</Text>
                        <Text style = {styles.subTitle}>HAMONIは一番近くの美味しい料理を写真から探せるサービスです。</Text> */}
                        {/* <Image source={images.guide_1}  style = {styles.image}/> */}

                        <Carousel
                        data={items}
                        renderItem={_renderItem}
                        itemWidth={Dimensions.get("window").width}
                        itemHeight={Dimensions.get("window").width}
                        sliderWidth={Dimensions.get("window").width}
                        onSnapToItem={index => setActiveIndex(index)}
                        />

                        <Pagination
                        dotsLength={items.length}
                        //dotsLength={post.items.length}
                        activeDotIndex={activeIndex}
                        dotColor={"white"}
                        inactiveDotColor="gray"
                        dotContainerStyle={{marginHorizontal: 2}}
                        />
                </View>
        </View>
	)

}

export default React.memo(component);