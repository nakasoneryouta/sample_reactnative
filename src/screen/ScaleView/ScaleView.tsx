import * as React from 'react';
import styles from './styles'
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

type Props = {
}

type Circle = {onPress: any,index: number,animatedValue: Animated.Value,animatedValue2: Animated.Value}

const quotes = [
  {
    key: 1,
    quote:
      'For the things we have to learn before we can do them, we learn by doing them.',
    author: 'Aristotle, The Nicomachean Ethics',
  },
  {
    key: 2,
    quote: 'The fastest way to build an app.',
    author: 'The Expo Team',
  }
];

const Circle = ({ onPress, index, animatedValue, animatedValue2 }:Circle) => {
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange:number[] = [0, 0.001, 0.5, 0.501, 1];
  const backgroundColor = animatedValue2.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      nextBgColor,
    ],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        { backgroundColor },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: dotBgColor,
            transform: [
              { perspective: 200 },
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },

              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },

              {
                translateX: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0%', '50%', '0%'],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <Animated.View
            style={[
              styles.button,
              {
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 0.05, 0.5, 1],
                      outputRange: [1, 0, 0, 1],
                      // extrapolate: "clamp"
                    }),
                  },
                  {
                    rotateY: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: ['0deg', '180deg', '180deg', '180deg'],
                    }),
                  },
                ],
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.05, 0.9, 1],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          >
            <AnimatedAntDesign name='arrowright' size={28} color={'white'} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const colors = [
  {
    initialBgColor: 'yellowgreen',
    bgColor: '#222',
    nextBgColor: 'yellowgreen',
  },
  {
    initialBgColor: '#222',
    bgColor: 'yellowgreen',
    nextBgColor: '#222',
  },
];

const component: React.FC<Props> = ({}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...quotes.keys()];
  const [index, setIndex] = React.useState(0);

  const animate = (i:number) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const onPress = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % colors.length).start();
    setIndex((index + 1) % colors.length);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 100,width: Dimensions.get("window").width}}>
      <Circle
        index={index}
        onPress={onPress}
        animatedValue={animatedValue}
        animatedValue2={animatedValue2}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          width: Dimensions.get("window").width,
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange: [0, 200],
                outputRange: quotes.map((_, i) => -i * width * 2),
              }),
            },
          ],
        }}
      >
        <Text>fdasfaada</Text>
      </Animated.View>
    </View>
  );
}

export default React.memo(component);