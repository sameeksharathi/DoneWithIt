import React from "react";
import { Image, View, StyleSheet, Text, Button } from "react-native";
import { useRoute, Link } from "@react-navigation/native";

function ViewImage({
  navigation,
  // route
}) {
  // const { name } = route.params;
  const route = useRoute();

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
      {/* <Button
          title="back to welcome"
          onPress={() => {
            navigation.goBack();
          }}
        /> */}
      <Link to={{ screen: 'Welcome', params: { id: 'jane' } }} style={{ backgroundColor: 'gold', width: "100%", textAlign: 'center', paddingVertical: 10 }}>
        Go to Welcome Page
      </Link>
      <Text>{route.params?.name}</Text>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode={"contain"}
      />
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
