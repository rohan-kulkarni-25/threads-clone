import { NavigationContainer } from "@react-navigation/native";
import Navigations from "./navigation";

import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { PaperProvider } from "react-native-paper";

const height = Platform.OS == "android" ? StatusBar.currentHeight : 0;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: height + 10 }}>
      <PaperProvider>
        <NavigationContainer>
          <Navigations />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
