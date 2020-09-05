import { StyleSheet, Dimensions } from 'react-native';

import { color } from 'react-native-reanimated';

const IMAGE_WIDTH = Dimensions.get('screen').width / 4;
const TOP_IMAGE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  closeIcon: {
    marginLeft: 20,
  },
  numbericon: {
    position: 'absolute', 
    top: 2,
    right: 2, 
    fontSize: 20,
    borderRadius: 20,
    width: 25,
    height: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  number_text:{
    color: 'white'
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderWidth: 0.5,
    borderColor: "black",
  },
  selectimage: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderWidth: 0.5,
    opacity: 0.3,
    borderColor: "white",
  },
  topImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: TOP_IMAGE_WIDTH,
    height: TOP_IMAGE_WIDTH,
    resizeMode: 'cover',
  }
  })

export default styles