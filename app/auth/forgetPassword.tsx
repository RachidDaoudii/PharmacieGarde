import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Platform,
} from "react-native";
import COLORS from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/button";
import { router } from "expo-router";

const ForgetPassword = () => {
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
            Forget PassWord
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Enter the email address associated with your account.
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
              }}
              source={require("@/assets/images/forgetpassword2.jpg")}
            />
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

          <Button
            title="Send"
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

export default ForgetPassword;
