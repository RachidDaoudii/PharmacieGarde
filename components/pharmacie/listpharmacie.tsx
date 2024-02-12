import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import PharmacieItem from "./pharmacieItem";
import COLORS from "@/constants/Colors";

export default function Listpharmacie() {
  const pharmacies = [
    {
      name: "pharmacie 1",
      address: "address 1",
      phone: "phone 1",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 2",
      address: "address 2",
      phone: "phone 2",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 3",
      address: "address 3",
      phone: "phone 3",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 4",
      address: "address 4",
      phone: "phone 4",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 5",
      address: "address 5",
      phone: "phone 5",
      image: require("@/assets/images/image1.jpg"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
          color: COLORS.white,
          marginLeft: 5,
          fontWeight: "500",
        }}
      >
        Select Top pharmacie
      </Text>
      <FlatList
        data={pharmacies}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
            <PharmacieItem pharmacie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
