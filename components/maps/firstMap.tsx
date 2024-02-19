import React, { useState, useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Spinner from "../spinner";
import data from "@/config/data";

export default function FirstMap() {
  const [mylocation, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      <View
        style={{
          borderRadius: 50,
        }}
      >
        {mylocation ? (
          <MapView
            initialRegion={{
              latitude: data[0].latitude,
              longitude: data[0].longitude,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.0221,
            }}
            style={{
              width: Dimensions.get("screen").width * 0.97,
              height: Dimensions.get("screen").height * 0.23,
            }}
          >
            {data.map((pharmacie, index) => {
              return (
                <Marker
                  coordinate={{
                    latitude: pharmacie.latitude,
                    longitude: pharmacie.longitude,
                  }}
                  title={pharmacie.name}
                  description={pharmacie.address}
                />
              );
            })}
          </MapView>
        ) : (
          <Spinner />
        )}
      </View>
    </View>
  );
}
