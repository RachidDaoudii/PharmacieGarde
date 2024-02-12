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
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const RestPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

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
              marginTop: 50,
            }}
          >
            Rest your password
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Please enter your new password
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 20,
              }}
              source={require("@/assets/images/done.jpg")}
            /> */}
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
              New Password
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

          <Button
            title="Done"
            filled
            textColor={COLORS.white}
            style={{
              marginTop: 5,
              marginBottom: 4,
              borderColor: COLORS.white,
              borderWidth: 1,
            }}
            onPress={() => router.push("/auth/verifyEmail")}
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
});

export default RestPassword;
