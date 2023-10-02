import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { NavigationRoutes, RootStackParamList } from "./types";
import BottomTabNavigator from "./bottom-tab-navigator";
import { LoginScreen } from "../screens/auth/login";
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  // const dispatch = useDispatch();

  // const { user } = useSelector((state: { auth: IAuth }) => state.auth);

  // const { isInitialLoading } = useSWRToken(
  //   "swr.user.me",
  //   async () => {
  //     return await AuthApi.me();
  //   },
  //   {
  //     onSuccess: (authData) => {
  //       dispatch(authMe(authData));
  //     },
  //   }
  // );

  // if (isInitialLoading) {
  //   return null;
  // }
  const user = false

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? 
          <Stack.Screen
          component={BottomTabNavigator}
          name={NavigationRoutes.Root}
          />
          :
          <Stack.Screen component={LoginScreen} name={NavigationRoutes.LoginScreen}  />
        }
    </Stack.Navigator>
  );
}

export default RootNavigator;
