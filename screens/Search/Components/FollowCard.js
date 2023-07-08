import { Text, TouchableOpacity, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const FollowCard = () => {
  return (
    <View style={tw`flex flex-row justify-around p-4 items-center`}>
      <Image
        source={{ uri: "https://github.com/rohan-kulkarni-25.png" }}
        style={{
          height: 40,
          width: 40,
          borderRadius: 100,
          alignSelf: "flex-start",
        }}
      />

      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <Text style={tw`font-bold my-1`}>dev.rohankulkarni</Text>
        <Text style={tw`text-gray-500 my-1`}>Rohan Kulkarni</Text>
        <Text style={tw` my-1`}>0 followers</Text>
      </View>

      <TouchableOpacity
        style={tw`border px-8 h-10 flex flex-row justify-center items-center self-start py-2 rounded-xl border-gray-300 `}
      >
        <Text style={tw`font-bold`}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FollowCard;
