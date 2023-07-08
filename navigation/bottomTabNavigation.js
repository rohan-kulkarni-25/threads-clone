import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ActivityScreen from "../screens/Activity/ActivityScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import ScrollScreen from "../screens/Scroll/ScrollScreen";

const Tab = createBottomTabNavigator();

const ThreadScreen = () => {
  return <Text>HOME</Text>;
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerBackground: "white",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
        name="Scroll"
        component={ScrollScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          header: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 32,
                backgroundColor: "white",
                paddingLeft: 10,
              }}
            >
              Search
            </Text>
          ),
          tabBarIcon: () => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather name="edit" size={24} color="black" />,
        }}
        name="Thread"
        component={ThreadScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarLabel: "Activity",
          header: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 32,
                backgroundColor: "white",
                paddingLeft: 10,
              }}
            >
              Activity
            </Text>
          ),
          tabBarIcon: () => (
            <FontAwesome name="heart-o" size={24} color="black" />
          ),
        }}
        name="Activity"
        component={ActivityScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
