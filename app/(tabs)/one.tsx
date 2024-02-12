import Header from "@/components/header";
import Listpharmacie from "@/components/pharmacie/listpharmacie";
import Pharmacies from "@/components/pharmacie/pharmacies";
import COLORS from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, Text, View, Image, ScrollView } from "react-native";
import MapView from "react-native-maps";
export default function home() {
  return (
    <ScrollView>
      <Header />
      <View
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "500",
            color: COLORS.white,
            // fontFamily: "Inter-Black",
          }}
        >
          Top Near By Places
        </Text>
        <View
          style={{
            borderRadius: 50,
            // overflow: "hidden"
          }}
        >
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.97,
              height: Dimensions.get("screen").height * 0.23,
            }}
          />
        </View>
      </View>
      <Listpharmacie />
      <Pharmacies />
    </ScrollView>
  );
}
