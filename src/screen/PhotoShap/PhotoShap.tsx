import React, { useRef } from 'react';
import { View, Dimensions, Animated, PanResponder, ImageCropData, TouchableOpacity ,Image, ImageSourcePropType, Platform} from 'react-native';
import styles from './styles'
import ImageEditor from "@react-native-community/image-editor";
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { images } from '../../config';
import * as ImageManipulator from 'expo-image-manipulator';

type Props = {
    uri: any
}

type Basis = {
    height: number,
    width: number,
    x: number,
    y: number
}

type AXIS = {
    axis: "X" | "Y"
}

const component: React.FC<Props> = ({ uri }) => {
    
    const WIDTH = Dimensions.get('window').width;

    const [AuxImage, setAuxImage] = React.useState<any>()

    const [imagecrop, setImageCrop] = React.useState<Basis>({
        height: 0,
        width: 0,
        x: 0,
        y:0,
    })

    React.useEffect(()=>{
        // (async()=>{
        //     XorY()
        // })();
        XorY()
    },[])

    const [axis , setAxis] = React.useState("")

    //画像をトリミング
    async function crop() : Promise<string> {
        const crop = {
            originX:(0),
            originY:(0),
            width:( 2000 ), //整形したいサイズ * 倍率
            height:( 2000 ),//整形したいサイズ * 倍率
        }
        const result = await ImageManipulator.manipulateAsync(uri,[{
            crop:crop
        }])

        XorY()
        setAuxImage(result.uri)
        return result.uri;
    }

    //縦長画像か横長画像か判断する関数
    const XorY = async() => {
        const image = await _getOriginImageSize()
        if(image.w > image.h) setAxis('Y')
        if(image.w < image.h) setAxis('X')
    }

    //元画像を取得
    const _getOriginImageSize = async() => {
        let SIZE = {w:0,h:0};
        SIZE = await new Promise<any>((c)=>Image.getSize(uri,
            ((w,h)=>c({w:w,h:h})),
            (e)=>{throw new Error("Cant get size...")}));
            return SIZE
    }

    //画像の拡大・縮小・ドラック
    const scale = new Animated.Value(1)
    const onGestureEvent = Animated.event([
        {nativeEvent: {scale: scale}}
    ],{useNativeDriver: true})

    //画像の縮小を規定サイズに戻す処理
    const onHanderStateChange = (event: any) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {

            const updownscale = event.nativeEvent.scale as number
            console.log(event.nativeEvent)

            if(1 > updownscale){
              Animated.spring(scale, {
              toValue: 1,
              useNativeDriver: true
            }).start()
            }

        }
    }

    const pan = useRef(new Animated.ValueXY()).current;


    const panResponder = useRef(
        PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: pan.x, dy: pan.y }
            ],{useNativeDriver: false}
        ),

        //横にずれるのを規定サイズに戻す
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: 1,
                useNativeDriver: true
            }).start()

            pan.flattenOffset();
        },

        onPanResponderEnd: (e) => {
            console.log("==========",e.nativeEvent.locationY)
        }
        })

    ).current;



    const MAXWIDTH = Dimensions.get('screen').width
    const AUX_SIZE = MAXWIDTH / 3
    const LINE_1 = AUX_SIZE
    const LINE_2 = AUX_SIZE * 2

    const SCALE_MAX = new Animated.Value(1.6)
    const SWIPE_MAX_Y = 120
    const SWIPE_MAX_X = 220

	return (
        <View style = {{width: MAXWIDTH,backgroundColor: 'black',flex: 1,marginTop: 100}}>
            <PinchGestureHandler
            onGestureEvent = {onGestureEvent}
            onHandlerStateChange = {onHanderStateChange}
            >
                <Animated.View style = {{width: MAXWIDTH,height: MAXWIDTH}} onLayout  = {(layout:any) => {setImageCrop(layout.nativeEvent.layout)}}>
                    <Animated.Image
                        {...panResponder.panHandlers}
                        source = {{uri: uri}}
                        style =
                        {[
                            {width: MAXWIDTH,height: MAXWIDTH},
                            {resizeMode: 'contain'},
                            {transform: [
                                {scale: scale},
                                { translateY: pan.y },
                                { translateX: pan.x },
                            ]}
                        ]}
                    />
                    <View pointerEvents = {"none"} style = {styles.auxcell}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{left: LINE_1}]}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{left: LINE_2}]}></View>

                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_1}]}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_1,left: LINE_1}]}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_1,left: LINE_2}]}></View>

                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_2}]}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_2,left: LINE_1}]}></View>
                    <View pointerEvents = {"none"} style = {[styles.auxcell,{top: LINE_2,left: LINE_2}]}></View>

                </Animated.View>

            </PinchGestureHandler>

            <TouchableOpacity style = {{width: 100,height: 100,backgroundColor: 'red'}} onPress = {() => {crop()}}>
            </TouchableOpacity>

            <Image style = {{flex: 1}} source = {{uri: AuxImage}}/>

        </View>
	)

}

export default React.memo(component);