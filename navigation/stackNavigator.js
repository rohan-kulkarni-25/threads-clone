import { createStackNavigator } from "@react-navigation/stack";
import ScrollScreen from "../screens/Scroll/ScrollScreen";
import ThreadDetailsScreen from "../screens/Scroll/ThreadDetailsScreen";
import { Text } from "react-native";
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ScrollScreen} />
      <Stack.Screen name="Threads" component={ThreadDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
