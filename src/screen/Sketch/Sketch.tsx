import React from 'react';
import styles from './styles'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import {
    AppRegistry,
    StyleSheet,
    View,
  } from 'react-native';
  import Signature from 'react-native-signature-canvas';
type Props = {
}

//https://reactnativeexample.com/react-native-signature-component-based-webview-canvas/
// step1:
// npm install --save react-native-signature-canvas

const component: React.FC<Props> = ({}) => {

	return (
        <View style = {{flex: 1}}>
            <Signature
            // handle when you click save button
            onOK={(img) => console.log(img)}
            // description text for signature
            descriptionText="Sign"
            // clear button text
            clearText="Clear"
            // save button text
            confirmText="Save"
            // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
            webStyle={`.m-signature-pad--footer
                .button {
                background-color: red;
                color: #FFF;
                }`}
            />
        </View>
	)

}

export default React.memo(component);