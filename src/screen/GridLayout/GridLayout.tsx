import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import Card from "../../components/atoms/Card/Card";
// import ExpandedCard from "../../components/atoms/ExpandedCard";

// const ExpandedCard = require("../../components/atoms/ExpandedCard");
// const Card = require("../../components/atoms/Card")
type Props = {
}

const component: React.FC<Props> = ({}) => {
  const [state, setState ] = React.useState<{ yOffset: number, xOffset: number, selectedCard: number }>()

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Expanding ScrollView Example</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <Card
            key={i}
            id={i}
            selectCard={(px:number, py:number, id:number) =>
              setState({ yOffset: py, xOffset: px, selectedCard: id })
            }
          />
        ))}
      </ScrollView>
    </View>
  );

}
export default component;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05386b"
  },
  title: {
    height: 60,
    backgroundColor: "#edf5e1",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#05386b"
  },
  list: {
    alignItems: "center",
    paddingTop: 20
  }
});
