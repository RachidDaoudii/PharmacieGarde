import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import COLORS from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Button from "@/components/button";
import { router, Link } from "expo-router";
import Checkbox from "expo-checkbox";
import serviceSignIn from "./service/signIn";

const SignIn = () => {
  const { onChange, onSubmit } = serviceSignIn();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22, marginTop: 30 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.white,
              marginTop: 50,
            }}
          >
            Hi Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Hello there, sign in to continue
          </Text>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginVertical: 8,
                color: COLORS.white,
              }}
            >
              Email Adress
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.white,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                backgroundColor: COLORS.white,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  color: COLORS.gray,
                }}
                onChangeText={(text) => onChange("email", text)}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginVertical: 8,
                color: COLORS.white,
              }}
            >
              Password
            </Text>
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.white,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                backgroundColor: COLORS.white,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  color: COLORS.gray,
                }}
                onChangeText={(text) => onChange("password", text)}
                placeholder="Enter your password"
                secureTextEntry={isPasswordShow}
              />
              <TouchableOpacity style={{ position: "absolute", right: 12 }}>
                <Ionicons
                  name={isPasswordShow ? "eye-off" : "eye"}
                  size={24}
                  color={COLORS.gray}
                  onPress={() => setIsPasswordShow(!isPasswordShow)}
                />
              </TouchableOpacity>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                  marginTop: 15,
                }}
              >
                <Checkbox
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={COLORS.gray}
                  style={{ marginRight: 5 }}
                />
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: COLORS.white }}>Remember me</Text>
                  <Link
                    href="/auth/forgetPassword"
                    style={{ color: COLORS.white, marginRight: 30 }}
                  >
                    <Text>Forgot Password?</Text>
                  </Link>
                </View>
              </View>
            </View>
          </View>

          <Button
            title="Sign In"
            filled
            textColor={COLORS.white}
            style={{
              marginTop: 5,
              marginBottom: 4,
              borderColor: COLORS.white,
              borderWidth: 1,
            }}
            onPress={() => onSubmit()}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.gray,
                marginHorizontal: 10,
              }}
            />
            <Text style={{ fontSize: 16, color: COLORS.gray }}>
              Or Sign in with
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.gray,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.white,
                backgroundColor: COLORS.white,
                marginRight: 4,
                borderRadius: 10,
              }}
              onPress={() => alert("Google Sign Up")}
            >
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 36, height: 36, marginRight: 8 }}
              />
              <Text
                style={{
                  color: COLORS.secondary,
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.white,
                backgroundColor: COLORS.white,
                marginRight: 4,
                borderRadius: 10,
              }}
              onPress={() => alert("Facebook")}
            >
              <Image
                source={require("../../assets/images/facebook.png")}
                style={{ width: 36, height: 36, marginRight: 8 }}
              />
              <Text
                style={{
                  color: COLORS.secondary,
                  fontWeight: "400",
                  fontSize: 16,
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Don't have an account?
            </Text>
            <Pressable onPress={() => router.push("/auth/signUp")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default SignIn;
