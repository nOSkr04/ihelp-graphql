import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Animated, { FadeInDown } from "react-native-reanimated";

export type IFormData = {
  phone: string;
  password: string;
};

type Props = {
  control: Control<IFormData, any>;
  errors: FieldErrors<{
    phone: string;
    password: string;
  }>;
};

const width = Dimensions.get("window").width;

const LoginForm = ({ control, errors }: Props) => {
  return (
    <>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={styles.view}
          >
            <TextInput
              placeholder="Email"
              value={value}
              placeholderTextColor={"gray"}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          </Animated.View>
        )}
        rules={{ required: true }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={styles.view}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          </Animated.View>
        )}
        rules={{ required: true }}
      />
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "black",
    padding: 5,
    width,
  },
});
