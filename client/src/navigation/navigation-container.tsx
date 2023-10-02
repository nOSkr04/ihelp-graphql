import React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import RootNavigator from "./root-navigator";

export default function Navigation(
//   {
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }
) {
  return (
    <NavigationContainer 
    // theme={colorScheme === "dark" ? DarkTheme : DarkTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
