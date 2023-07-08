import { ScrollView, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const ThreadDetailCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 15,
        padding: 15,
        borderBottomColor: "grey",
        borderBottomWidth: 0.3,
      }}
    >
      <View style={{ flex: 1, flexDirection: "column", gap: 15 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://github.com/rohan-kulkarni-25.png" }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,

                justifyContent: "flex-start",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              dev.rohankulkarni
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
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
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Text style={{ alignSelf: "center", color: "gray" }}>54 replies</Text>
          <Text style={{ alignSelf: "center", color: "gray" }}>720 likes</Text>
        </View>
      </View>
    </View>
  );
};

export default ThreadDetailCard;
