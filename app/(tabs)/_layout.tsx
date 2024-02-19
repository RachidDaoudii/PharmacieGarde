import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/Colors";

export default function Page() {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: COLORS.secondary }}
      screenOptions={{
        tabBarActiveTintColor: COLORS.gray,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarStyle: {
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              color={COLORS.secondary}
              style={{ fontWeight: "800" }}
              size={27}
            />
          ),
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name="search"
        options={{
          headerTitle: "search",
          tabBarLabel: "search",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: () => (
            <Ionicons
              name="search-outline"
              color={COLORS.secondary}
              style={{ fontWeight: "800" }}
              size={27}
            />
          ),
          headerShown: false,
        }}
      /> */}
      <Tabs.Screen
        name="two"
        options={{
          headerTitle: "Map",
          tabBarLabel: "Map",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: () => (
            <Ionicons
              name="navigate-circle-outline"
              color={COLORS.secondary}
              style={{ fontWeight: "bold" }}
              size={27}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          headerTitle: "setting",
          tabBarLabel: "setting",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              color={COLORS.secondary}
              style={{ fontWeight: "800" }}
              size={27}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
