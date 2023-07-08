import { Image, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
const ThreadCard = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        padding: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 0.3,
        flexDirection: "column",
        gap: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Threads")}>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
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
            <View
              style={tw`bg-gray-200 flex-1  w-0.5  self-center my-4`}
            ></View>
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
                this is randomly generated text to test the working of
                threadcard component in my react native clone application. this
                is randomly generated text to test the working of threadcard
                component in my react native clone application. this is randomly
                generated text to test the working of threadcard component in my
                react native clone. application. this is randomly generated text
                to test the working of threadcard component in my react native
                clone application.
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
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          gap: 15,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 100,
          }}
        >
          <Image
            source={{ uri: "https://github.com/Nandani-Paliwal.png" }}
            style={{
              height: 20,
              width: 20,
              borderRadius: 100,
              alignSelf: "flex-start",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
          <Image
            source={{ uri: "https://github.com/eddiejaoude.png" }}
            style={{
              height: 15,
              width: 15,
              borderRadius: 100,
              alignSelf: "flex-start",
              position: "absolute",
              top: 10,
              right: 25,
            }}
          />
          <Image
            source={{ uri: "https://github.com/naomi-lgbt.png" }}
            style={{
              height: 10,
              width: 10,
              borderRadius: 100,
              alignSelf: "flex-start",
              position: "absolute",
              top: 30,
              right: 15,
            }}
          />
        </View>
        <Text style={{ alignSelf: "center", color: "gray" }}>54 replies</Text>
        <Text style={{ alignSelf: "center", color: "gray" }}>720 likes</Text>
      </View>
    </View>
  );
};

export default ThreadCard;
