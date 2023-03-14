import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import {useCallback} from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { MyStack } from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
    </View>
  );
}
