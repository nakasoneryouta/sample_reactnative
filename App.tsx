import React from 'react';
import { StyleSheet, Text, View ,Button, Image} from 'react-native';
import SwipeablePanel from "rn-swipeable-panel";
import ColorSliderView from './src/components/template/ColorSliderView/ColorSliderView';

import Tab from './src/components/atoms/EditorTab/EditorTab'
import FontSelectView from './src/components/template/FontSelectView/FontSelectView';
import ColorPaletteView from './src/components/template/ColorPaletteView/ColorPaletteView';
import Map from './src/screen/Map/Map'

import BlurVIew from './src/components/atoms/BlurView/BlurView'
import ScaleView from './src/screen/ScaleView/ScaleView'
import Sketch from './src/screen/Sketch/Sketch'
import UberEatsScroll from './src/screen/UberEatsScroll/UberEatsScroll'

import { WebView } from 'react-native-webview';

import { images } from './src/config';

import data from './src/components/Html/siriwave/Html'
import Pay from './src/screen/Pay/Pay';

export default function App() {

    const [swipeablePanelActive, setSwipeablePanelActive] = React.useState(false)
    const openPanel = () => {
      setSwipeablePanelActive(true)
    }
    const closePanel = () => {
      setSwipeablePanelActive(false)
    }

    const PolicyHTML = require('./siriwave/index.html');

    //投稿一覧、いいね一覧のタブ
    const tabs = [
      {
        key: 'first',
        title: "フォント",
        scene: () => <FontSelectView/>,
      },
      {
        key: 'second',
        title: "カラー",
        scene: () => <ColorSliderView/>,
      },
    ];

    return (
      <View style = {styles.container}>
        <UberEatsScroll/>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  tabContainer:{
    height: 30,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  tabText:{
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },

  modalContainer:{
    width: '100%',
    justifyContent: 'flex-end',
    margin: 0,
  },
  cardContainer:{
    width: '100%',
    height: 300,
    backgroundColor: 'red'
  }
  
});
