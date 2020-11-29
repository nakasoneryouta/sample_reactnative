import React from 'react';
import { StyleSheet, Text, View ,Button, Image} from 'react-native';
import SwipeablePanel from "rn-swipeable-panel";
import ColorSliderView from './src/components/template/ColorSliderView/ColorSliderView';

import Tab from './src/components/atoms/EditorTab/EditorTab'
import FontSelectView from './src/components/template/FontSelectView/FontSelectView';
import ColorPaletteView from './src/components/template/ColorPaletteView/ColorPaletteView';

import BlurVIew from './src/components/atoms/BlurView/BlurView'
import ScaleView from './src/screen/ScaleView/ScaleView'

import { images } from './src/config';

export default function App() {

    const [swipeablePanelActive, setSwipeablePanelActive] = React.useState(false)
    const openPanel = () => {
      setSwipeablePanelActive(true)
    }
    const closePanel = () => {
      setSwipeablePanelActive(false)
    }

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
        {/* <React.Fragment>

        <Button title="開く1" onPress={() => openPanel()} />

        <SwipeablePanel
          fullWidth
          isActive={swipeablePanelActive}
          onClose={closePanel}
          onPressCloseButton={closePanel}
          pointerEvents="box-none"
          noBackgroundOpacity
          onlySmall = {true}
          style = {{backgroundColor: '#212223'}}
        >
            <View style = {styles.tabContainer}>
            </View>
            <Tab tabs = {tabs}/>
        </SwipeablePanel>

      </React.Fragment> */}
      {/* <ColorSliderView/> */}
      <ScaleView/>
      {/* <Text
          adjustsFontSizeToFit = {true}
          numberOfLines={1}
          style = {{fontSize: 100,width: 300,backgroundColor: 'red'}}
          minimumFontScale={0.1}
       >中曽根涼太中曽根涼太</Text> */}
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

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
