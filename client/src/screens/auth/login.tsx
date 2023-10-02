import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { memo, useCallback } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useForm } from "react-hook-form";
import { Colors } from "../../constants/colors";
import LoginForm, { IFormData } from "../../components/auth/login-form";
import { AuthApi } from "../../api";

const { width, height } = Dimensions.get("window");

const LoginScreen = memo(() => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    try {
      const res = await AuthApi.login(data);
      //   dispatch(authLogin(res));
      console.log(res);
    } catch (err: any) {
      setError("root", {
        type: err.statusCode,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <ScrollView>
        <Image
          style={styles.bgImage}
          source={require("../../assets/imgs/background.png")}
        />
        {/* lights */}
        <View style={styles.lightContainer}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            source={require("../../assets/imgs/light.png")}
            style={styles.lamp1}
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify()}
            source={require("../../assets/imgs/light.png")}
            style={styles.lamp2}
          />
        </View>

        {/* title and form */}
        <View style={styles.container}>
          {/* title */}
          <View style={styles.titleContainer}>
            <Animated.Text
              entering={FadeInUp.duration(1000).springify()}
              style={styles.title}
            >
              Login
            </Animated.Text>
          </View>

          {/* form */}
          <View style={{ alignItems: "center" }}>
            <LoginForm control={control} errors={errors} />

            <Animated.View
              style={{ width }}
              entering={FadeInDown.delay(400).duration(1000).springify()}
            >
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={{
                  width,
                  backgroundColor: "blue",
                  padding: 3,
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: Colors.white,
                    textAlign: "center",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={{ color: "black" }}>SignUp</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

LoginScreen.displayName = "LoginScreen";
export { LoginScreen };

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bgImage: {
    height,
    width,
    position: "absolute",
  },
  lightContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width,
    position: "absolute",
  },
  lamp1: {
    height: 225,
    width: 90,
  },
  lamp2: {
    height: 160,
    width: 65,
    opacity: 75,
  },
  container: {
    height,
    width,

    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
