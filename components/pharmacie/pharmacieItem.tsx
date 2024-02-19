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
        source={require("@/assets/images/pharmacie.jpg")}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      {/* <Text
        style={{ fontSize: 13, color: COLORS.white, marginTop: 3, flex: 1 }}
      >
        {pharmacie.nom}
      </Text> */}
    </View>
  );
}
