import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@/constants/Colors";

export default function Page() {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.white,
          }}
        >
          Not Found !!!
        </Text>
      </View>
    </LinearGradient>
  );
}
