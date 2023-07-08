import { ScrollView, Text, View, Image } from "react-native";
import ThreadDetailCard from "./components/ThreadDetailCard";
import ReplyCard from "./components/ReplyCard";

const ThreadDetailsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ThreadDetailCard />
    </ScrollView>
  );
};

export default ThreadDetailsScreen;
