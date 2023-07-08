import { View, Text, ScrollView } from "react-native";
import SearchBar from "./Components/SearchBar";
import FollowCard from "./Components/FollowCard";

const SearchScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
