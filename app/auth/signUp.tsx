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
import Checkbox from "expo-checkbox";
import Button from "@/components/button";
import { router } from "expo-router";

const SignUp = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 30 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.white,
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Connect with your friends
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
              Full Name
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
                placeholder="Enter your full name"
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
              Mobile Number
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
                placeholder="Enter your mobile number"
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
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              color={COLORS.gray}
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>
              I agree to the terms and conditions
            </Text>
          </View>
          <Button
            title="Sign Up"
            filled
            textColor={COLORS.white}
            style={{
              marginTop: 18,
              marginBottom: 4,
              borderColor: COLORS.white,
              borderWidth: 1,
              width: "100%",
            }}
            onPress={() => router.push("/")}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
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
              Or Sign up with
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
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/auth/signIn")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                Login
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

export default SignUp;
