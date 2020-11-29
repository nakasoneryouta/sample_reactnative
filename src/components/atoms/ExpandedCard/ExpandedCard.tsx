import React, { Component } from "react";
import { Animated, Dimensions, TouchableWithoutFeedback } from "react-native";
import Card from "../Card/Card";
const ELEMENT_HEIGHT = 200;

type Props = {
  yOffset: number,
  xOffset: number,
}


const component: React.FC<Props> = ({yOffset,xOffset}) => {


  const [state, setState] = React.useState({animatedValue: new Animated.Value(0)})
  const { height: windowHeight } = Dimensions.get("window");
  const topTranslate = ([yOffset, 0]);
  const leftTranslate = ([xOffset, 0]);
  const rightTranslate = ([xOffset, 0]);
  const bottomTranslate = ([
    windowHeight - yOffset - ELEMENT_HEIGHT,
    0
  ]);

  const unselectCard = () => {
    Animated.timing(state, {
      toValue: 0,
      duration: 500
    }).start();
  };

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: topTranslate,
          left: leftTranslate,
          right: rightTranslate,
          bottom: bottomTranslate,
          backgroundColor: "#5cdb95"
        }
      ]}
    >
      <TouchableWithoutFeedback onPress={() => unselectCard()}>
        <Animated.Text
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 200,
            opacity: this.getTranslate([0, 1])
          }}
        >
          X
        </Animated.Text>
      </TouchableWithoutFeedback>
      {/* <Card/> */}
    </Animated.View>
  );
}

export default component


// export default class ExpandedCard extends Component {
//   state = { animatedValue: new Animated.Value(0) };
//   render() {
//     const { height: windowHeight } = Dimensions.get("window");
//     const topTranslate = this.getTranslate([this.props.yOffset, 0]);
//     const leftTranslate = this.getTranslate([this.props.xOffset, 0]);
//     const rightTranslate = this.getTranslate([this.props.xOffset, 0]);
//     const bottomTranslate = this.getTranslate([
//       windowHeight - this.props.yOffset - ELEMENT_HEIGHT,
//       0
//     ]);
//     return (
//       <Animated.View
//         style={[
//           {
//             position: "absolute",
//             top: topTranslate,
//             left: leftTranslate,
//             right: rightTranslate,
//             bottom: bottomTranslate,
//             backgroundColor: "#5cdb95"
//           }
//         ]}
//       >
//         <TouchableWithoutFeedback onPress={this.unselectCard}>
//           <Animated.Text
//             style={{
//               position: "absolute",
//               top: 20,
//               right: 20,
//               zIndex: 200,
//               opacity: this.getTranslate([0, 1])
//             }}
//           >
//             X
//           </Animated.Text>
//         </TouchableWithoutFeedback>
//         <Card/>
//       </Animated.View>
//     );
//   }
//   componentDidMount() {
//     Animated.timing(this.state.animatedValue, {
//       toValue: 1,
//       duration: 500
//     }).start();
//   }
//   unselectCard = () => {
//     Animated.timing(this.state.animatedValue, {
//       toValue: 0,
//       duration: 500
//     }).start(() => this.props.unselectCard());
//   };
//   getTranslate = outputRange => {
//     return this.state.animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange
//     });
//   };
// }

