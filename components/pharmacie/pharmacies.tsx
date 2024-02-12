import COLORS from "@/constants/Colors";
import { Text, View, FlatList, Image, ScrollView } from "react-native";
import PharmaciePost from "./pharmaciePost";

export default function Pharmacies() {
  const pharmacies = [
    {
      name: "pharmacie 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      address: "address 1",
      phone: "phone 1",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      address: "address 2",
      phone: "phone 2",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      address: "address 3",
      phone: "phone 3",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      address: "address 4",
      phone: "phone 4",
      image: require("@/assets/images/image1.jpg"),
    },
    {
      name: "pharmacie 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      address: "address 5",
      phone: "phone 5",
      image: require("@/assets/images/image1.jpg"),
    },
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: COLORS.white,
          marginLeft: 5,
          fontWeight: "500",
        }}
      >
        Found 20 Pharmacies
      </Text>

      <FlatList
        style={{
          marginTop: 10,
          marginLeft: 5,
        }}
        data={pharmacies}
        renderItem={({ item }) => <PharmaciePost post={item} />}
      />
    </View>
  );
}
