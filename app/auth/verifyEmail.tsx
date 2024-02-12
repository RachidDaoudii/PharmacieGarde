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
import Button from "@/components/button";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { useState } from "react";

const VerifyEmail = () => {
  const sendCode = (e: string) => {
    console.log(e);
  };

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.white,
              marginTop: 50,
            }}
          >
            Check your phone
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            We've sent the code to your phone
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
              }}
              source={require("@/assets/images/verifyEmail.jpg")}
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <View
              style={{
                width: "100%",
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <OtpInput
                numberOfDigits={5}
                onTextChange={(code) => sendCode(code)}
              />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 20,
                  color: COLORS.white,
                  fontWeight: "400",
                }}
              >
                code expores in : 5:00
              </Text>
              <View
                style={{
                  marginTop: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: COLORS.white }}>
                  Don't receive the code?{" "}
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: COLORS.gray, fontWeight: "500" }}>
                    Resend Code
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Button
            title="Verify"
            style={{
              marginTop: 10,
              marginBottom: 4,
              borderColor: COLORS.white,
              borderWidth: 1,
            }}
            onPress={() => router.push("/auth/restPassword")}
          />

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
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default VerifyEmail;
