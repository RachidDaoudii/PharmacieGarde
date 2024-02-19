import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import data from "@/config/data";
import * as Location from "expo-location";

export default function two() {
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
  console.log(mylocation);

  return (
    <View style={styles.container}>
      {mylocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0221,
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
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
