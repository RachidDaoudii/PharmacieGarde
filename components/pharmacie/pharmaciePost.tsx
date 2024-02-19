import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/Colors";

export default function PharmaciePost({ post }: any) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        marginTop: 10,
      }}
    >
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View>
          <Image
            source={{ uri: post.images[0] }}
            style={{ width: 150, height: 150, borderRadius: 10 }}
          />
        </View>
        <View>
          <Text
            style={{ fontSize: 18, color: COLORS.white, fontWeight: "500" }}
          >
            {post.name}
          </Text>
          <Text style={{ fontSize: 18, color: COLORS.white, width: "70%" }}>
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
