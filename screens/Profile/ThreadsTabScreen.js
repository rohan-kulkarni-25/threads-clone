import { View, Text } from "react-native";

const ThreadsTabScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontStyle: "italic" }}>write your first thread.</Text>
    </View>
  );
};

export default ThreadsTabScreen;
