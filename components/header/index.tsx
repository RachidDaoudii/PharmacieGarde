import logout from "@/app/auth/service/logout";
import COLORS from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";

export default function header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 100 }}
        source={require("@/assets/images/logo.jpg")}
      />
      <View>
        <TextInput style={styles.searchBar} placeholder="Search here..." />
      </View>
      {/* <Link href={"/"} style={{ width: 50, height: 50, borderRadius: 100 }}>
        <Image
          style={{ width: 20, height: 20, borderRadius: 100 }}
          source={require("@/assets/images/logo.jpg")}
        />
      </Link> */}
      <Pressable onPress={() => logout()}>
        <Text>logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.7,
    color: COLORS.dark,
  },
});
