import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Welcome() {
  console.log("Welcome Executed");

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode={"cover"}
      style={styles.image}
    >
      <View style={styles.heading}>
        <Image
          source={require("../assets/logo-red.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ color: "black" }}>Sell what you don't need!</Text>
      </View>
      <View style={{ backgroundColor: "tomato", width: "100%", height: 70 }} />
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: 70 }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  heading: {
    flex: 1,
    alignItems: "center",
    top: 70,
  },
});
