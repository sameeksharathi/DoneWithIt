import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../src/welcome";
import ViewImage from "../src/viewImage";
import DrawerNavigator from "./drawer";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="View Image"
        component={ViewImage}
      />
    </Stack.Navigator>
  );
}
