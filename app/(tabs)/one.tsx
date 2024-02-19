import Header from "@/components/header";
import FirstMap from "@/components/maps/firstMap";
import Listpharmacie from "@/components/pharmacie/listpharmacie";
import Pharmacies from "@/components/pharmacie/pharmacies";
import COLORS from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, Text, View, Image, ScrollView } from "react-native";
import MapView from "react-native-maps";

export default function home() {
  return (
    <View>
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
          }}
        >
          Top Near By Places
        </Text>
        <FirstMap />
      </View>
      <Listpharmacie />
      <Pharmacies />
    </View>
  );
}
