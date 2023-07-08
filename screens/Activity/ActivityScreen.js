import { View, Text } from "react-native";

const ActivityScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontStyle: "italic" }}>
        no activity !! are you an introvert ?
      </Text>
    </View>
  );
};

export default ActivityScreen;
