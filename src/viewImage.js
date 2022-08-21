import React from "react";
import { Image, View, StyleSheet, Text, Button } from "react-native";

function ViewImage({ route, navigation }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ backgroundColor: "tomato", width: 50, height: 50, left: 20 }}
        />
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 50,
            height: 50,
            right: 20,
          }}
        />
      </View>
      <Text>{name}</Text>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode={"contain"}
      />
      <Button title="back to welcome" onPress={() => {
        navigation.goBack();
      }} />
    </View>
  );
}

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
