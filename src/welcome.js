import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';


export default function Welcome({ navigation }) {
  console.log("Welcome Executed");

  const title = () => {
    useFocusEffect(
      React.useCallback(() => {
        alert('Screen was focused');
        return () => {
          alert('Screen was unfocused');
        };
      }, [])
    );
  
    return <View />;
  }

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
      {title()}
      <View style={{ backgroundColor: "tomato", width: "100%", height: 70 }}>
        <Button
          title="View Image"
          onPress={() => navigation.navigate("View Image", { name: "chair" })}
        />
      </View>
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
