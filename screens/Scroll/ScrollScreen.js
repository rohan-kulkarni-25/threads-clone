import tw from "tailwind-react-native-classnames";
import ThreadCard from "./components/ThreadCard";

const { View, Text, ScrollView } = require("react-native");

const ScrollScreen = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </ScrollView>
    </View>
  );
};

export default ScrollScreen;
