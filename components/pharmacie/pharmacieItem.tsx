import COLORS from "@/constants/Colors";
import { Text, View, Image } from "react-native";

export default function PharmacieItem({ pharmacie }: any) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        width: 100,
        height: 100,
        marginTop: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
      }}
    >
      <Image
        source={pharmacie.image}
        style={{ width: 50, height: 50, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 13, color: COLORS.white ,marginTop:3 }}>
        {pharmacie.name}
      </Text>
      {/* <Text>{pharmacie.address}</Text>
      <Text>{pharmacie.phone}</Text> */}
    </View>
  );
}
