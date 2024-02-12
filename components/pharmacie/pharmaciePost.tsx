import { Text, View, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/Colors";

export default function PharmaciePost({ post }: any) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignItems: "center",
        gap: 15,
        marginBottom: 15,
      }}
    >
      <Image
        source={post.image}
        style={{ width: 110, height: 110, borderRadius: 15 }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: "500" }}>
          {post.name}
        </Text>
        <Text style={{ fontSize: 15, color: COLORS.white }}>
          {post.description}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18, color: COLORS.white }}>
            {post.address}
          </Text>

          <Ionicons
            size={20}
            color={COLORS.white}
            name="star-outline"
          ></Ionicons>
        </View>
      </View>
    </View>
  );
}
