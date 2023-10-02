import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useEffect, useRef } from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../../constants/colors";

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabBarComponent = memo(
  ({ active, options, onLayout, onPress }: TabBarComponentProps) => {
    // handle lottie animation -----------------------------------------
    const ref = useRef(null);

    useEffect(() => {
      if (active && ref?.current) {
        // @ts-ignore
        ref.current.play();
      }
    }, [active]);

    // animations ------------------------------------------------------

    const animatedComponentCircleStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: withTiming(active ? 1 : 0, { duration: 250 }),
          },
        ],
      };
    });

    const animatedIconContainerStyles = useAnimatedStyle(() => {
      return {
        opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
      };
    });

    return (
      <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
        <Animated.View
          style={[styles.componentCircle, animatedComponentCircleStyles]}
        />
        <Animated.View
          style={[styles.iconContainer, animatedIconContainerStyles]}
        >
          {/* @ts-ignore */}
          {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
        </Animated.View>
      </Pressable>
    );
  }
);

TabBarComponent.displayName = "TabBarComponent";

export { TabBarComponent };

const styles = StyleSheet.create({
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
