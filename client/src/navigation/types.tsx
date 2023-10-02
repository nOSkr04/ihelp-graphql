import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum NavigationRoutes {
  Root = "Root",
  LoginScreen="LoginScreen",
  SocialTab= "SocialTab",
  EmployeeTab="EmployeeTab",
  EmployerTab="EmployerTab",
  HomeTab="HomeTab",
  UserProfileTab = "UserProfileTab"
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  LoginScreen: undefined
};

export type RootTabParamList = {
  HomeTab: undefined;
  SocialTab: undefined;
  EmployeeTab: undefined;
  EmployerTab: undefined;
  UserProfileTab: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends RootTabParamList {}
  }
}
