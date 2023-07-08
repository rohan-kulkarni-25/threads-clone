import { View, Text } from "react-native";

const RepliesTabScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontStyle: "italic" }}>no replies yet. start interaction !!</Text>
    </View>
  );
};

export default RepliesTabScreen;
