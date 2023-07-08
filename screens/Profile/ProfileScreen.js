import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "react-native";
import TopTabNavigation from "../../navigation/topTabNavigation";
const height = StatusBar.currentHeight;

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const Tab = createMaterialTopTabNavigator();
const ThreadsScreen = () => {
  return <Text>HELLo</Text>;
};
const RepliesScreen = () => {
  return <Text>HELLo</Text>;
};

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <View style={styles.status}>
      <View style={tw`flex flex-row justify-between`}>
        <MaterialCommunityIcons name="web" size={28} color="black" />
        <Octicons name="three-bars" size={28} color="black" />
      </View>
      <View style={tw`flex flex-row justify-between my-4`}>
        <View style={tw``}>
          <Text style={tw`text-2xl font-bold`}>Rohan Kulkarni</Text>
          <View style={tw`mt-4 flex flex-row items-center`}>
            <Text style={tw` font-bold `}>dev.rohankulkarni</Text>
            <Text style={tw`bg-gray-200 p-2 rounded-full text-gray-500 mx-2`}>
              threads.net
            </Text>
          </View>
        </View>
        <Image
          style={tw`h-20 w-20 rounded-full`}
          source={{ uri: "https://github.com/rohan-kulkarni-25.png" }}
        />
      </View>
      <View>
        <Text>Radhe Radhe 🌻</Text>
      </View>
      <View style={tw`flex flex-row justify-evenly mt-8`}>
        <TouchableOpacity
          style={tw`border px-8 py-2 rounded-lg border-gray-300`}
        >
          <Text style={tw`font-bold`}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`border px-8 py-2 rounded-lg border-gray-300`}
        >
          <Text style={tw`font-bold`}>Share profile</Text>
        </TouchableOpacity>
      </View>
    </View>
    {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={ThreadsScreen} />
      <Tab.Screen name="Settings" component={RepliesScreen} />
    </Tab.Navigator> */}
    <TopTabNavigation />
  </View>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  status: {
    marginTop: height,
    padding: 12,
  },
});
