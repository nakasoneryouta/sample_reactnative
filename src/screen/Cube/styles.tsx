import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    father: {
        flex: 1,
        position: "relative"
      },
      container: {
        flex: 1,
        backgroundColor: 'green'
        // justifyContent: "center",
        // alignItems: "center"
      },
      text: {
        color: "#3a405a",
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "transparent"
      },
      image: {
        position: "absolute",
        top: 0,
        height: height,
        width: width
      },
      trigger: {
        position: "absolute",
        resizeMode: "contain",
        width: 110,
        backgroundColor: "transparent"
      }
})

export default styles;