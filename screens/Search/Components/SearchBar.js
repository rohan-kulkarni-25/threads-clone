// import { TextInput } from "react-native-paper";
import { TextInput, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const SearchBar = () => {
  return (
    <View style={{ margin: 20,marginVertical:10 }}>
      <TextInput style={tw`bg-gray-100 p-2 rounded-lg`} placeholder="Search" />
    </View>
  );
};

export default SearchBar;
