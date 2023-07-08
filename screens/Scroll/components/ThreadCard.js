import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
const ThreadCard = () => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        gap: 15,
        borderBottomColor: "grey",
        borderBottomWidth: 0.3,
      }}
    >
      <View style={tw`flex flex-col`}>
        <Image
          source={{ uri: "https://github.com/rohan-kulkarni-25.png" }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 100,
            alignSelf: "flex-start",
          }}
        />
        <View style={tw`bg-gray-200 flex-1  w-1 self-center my-4`}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "column", gap: 15 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            dev.rohankulkarni
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text>31m</Text>
            <Entypo name="dots-three-horizontal" size={16} color="black" />
          </View>
        </View>
        <View style={{}}>
          <Text>
            this is randomly generated text to test the working of threadcard
            component in my react native clone application. this is randomly
            generated text to test the working of threadcard component in my
            react native clone application. this is randomly generated text to
            test the working of threadcard component in my react native clone.
            application. this is randomly generated text to test the working of
            threadcard component in my react native clone application.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 20, marginTop: 10 }}>
          <AntDesign name="hearto" size={20} color="black" />
          <FontAwesome name="comment-o" size={20} color="black" />
          <AntDesign name="retweet" size={20} color="black" />
          <Ionicons name="paper-plane-outline" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ThreadCard;
