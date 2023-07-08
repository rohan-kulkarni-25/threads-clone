import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RepliesTabScreen from "../screens/Profile/RepliesTabScreen";
import ThreadsTabScreen from "../screens/Profile/ThreadsTabScreen";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "black",
        tabBarContentContainerStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Threads"
        options={{
          tabBarLabel: "Threads",
        }}
        component={ThreadsTabScreen}
      />
      <Tab.Screen name="Replies" component={RepliesTabScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigation;
