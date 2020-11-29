import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

type Props = {
  id: number,
  selectCard: (px:number, py:number, id:number) => void;
}

const component: React.FC<Props> = ({id,selectCard}) => {

  const [container, setContainer ] = React.useState<View | null>()

	return (
    <View ref={(ref) => (setContainer(ref))}>
    <TouchableWithoutFeedback
      onPress={() =>
        container && container.measure((fx:number, fy:number, width:number, height:number, px:number, py:number) => {
          selectCard(px,py,id)
          console.log("aaaaaaaaaa")
        })
      }
    >
      <View style={styles.card} />
    </TouchableWithoutFeedback>
  </View>
	)

}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 200,
    borderRadius: 3,
    backgroundColor: "#5cdb95",
    marginBottom: 20
  }
});

export default component;
