import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@/constants/Colors";
import Button from "@/components/button";
import { Link, router } from "expo-router";

export default function Page() {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("@/assets/images/image1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
          <Image
            source={require("@/assets/images/image2.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 5,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />
          <Image
            source={require("@/assets/images/image3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -30,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />
          <Image
            source={require("@/assets/images/image5.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
          <View
            style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 400,
              width: "100%",
            }}
          >
            <Text style={styles.letGt}>Let's Get</Text>
            <Text
              style={{ fontSize: 46, fontWeight: "bold", color: COLORS.white }}
            >
              Started
            </Text>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{ fontSize: 16, color: COLORS.white, marginVertical: 4 }}
              >
                Connect with each other with ...
              </Text>
              <Text
                style={{ fontSize: 16, color: COLORS.white, marginVertical: 4 }}
              >
                {" "}
                Connect with each other with ...
              </Text>
            </View>
            <Button
              title="Join Now"
              onPress={() => router.push("/auth/signUp")}
              style={{ marginTop: 22, width: "100%" }}
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
              <Link href={"/(tabs)/one"}>one</Link>
              <Link href={"/(tabs)/two"}>two</Link>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  letGt: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
