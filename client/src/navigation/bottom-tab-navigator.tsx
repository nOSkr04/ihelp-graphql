import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes, RootTabParamList } from "./types";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Colors } from "../constants/colors";
import { AnimatedTabBar } from "../components/tab-bar/animated-tab-bar";
import { HomeTab } from "../screens/bottom-tabs/home/home";
import { EmployerTab } from "../screens/bottom-tabs/employer/employer";
import { EmployeeTab } from "../screens/bottom-tabs/employee/employee";
import { UserProfileTab } from "../screens/bottom-tabs/user-profile/user-profile";
import SocialTab from "../screens/bottom-tabs/social/social";

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  return (
    <BottomTab.Navigator initialRouteName={NavigationRoutes.HomeTab} 
    tabBar={(props) => <AnimatedTabBar {...props} />}
    screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.bgs, }}
    >
      <BottomTab.Screen
        component={HomeTab}
        name={NavigationRoutes.HomeTab}
        options={{ tabBarIcon : () => <FontAwesome color={Colors.black} name="home" size={24}  />,
        headerShown: false,}}
      />
      <BottomTab.Screen
        component={EmployerTab}
        name={NavigationRoutes.EmployerTab}
        options={{ tabBarIcon : () => <FontAwesome color={Colors.black} name="shopping-cart" size={24}  />,
        headerShown: false,}}
      />
      <BottomTab.Screen
        component={EmployeeTab}
        name={NavigationRoutes.EmployeeTab}
        options={{ tabBarIcon : () => <FontAwesome color={Colors.black} name="user" size={24}  />,
        headerShown: false,}}
      />
      <BottomTab.Screen
        component={SocialTab}
        name={NavigationRoutes.SocialTab}
        options={{ tabBarIcon : () => <FontAwesome color={Colors.black} name="user" size={24}  />,
        headerShown: false,}}
      />
      <BottomTab.Screen
        component={UserProfileTab}
        name={NavigationRoutes.UserProfileTab}
        options={{ tabBarIcon : () => <FontAwesome color={Colors.black} name="user" size={24}  />,
        headerShown: false,}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
