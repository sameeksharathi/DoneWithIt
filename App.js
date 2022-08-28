import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar as NativeStatusBar,
} from "react-native";
import Welcome from "./src/welcome";
import ViewImage from "./src/viewImage";
import AppNavigator from "./routes/routes";
import DrawerNavigator from "./routes/drawer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "android" ? NativeStatusBar.currentHeight : 0,
  },
});
