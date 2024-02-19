import COLORS from "@/constants/Colors";
import {
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import PharmaciePost from "./pharmaciePost";
import PharmacieItem from "./pharmacieItem";
import data from "@/config/data";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PharmacieType from "@/config/typeDate";

export default function Pharmacies() {
  const [pharmacies, setPharmacies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPharmacie, setSelectedPharmacie] = useState({
    id: 0,
    name: "",
    address: "",
    latitude: 0,
    longitude: 0,
    distance: 0,
    images: [,],
    openingHours: "",
    closingHours: "",
    phone: "",
    email: "",
    services: [],
    onGuard: false,
    onGuardDays: null,
    reviews: [],
  });
  function model() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            top: "10%",
            backgroundColor: COLORS.transparent,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: "50%",
          }}
        >
          <View style={{ padding: 5, margin: 5 }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons
                size={30}
                color={COLORS.white}
                name="arrow-back-outline"
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ marginTop: 10, padding: 10 }}>
              <Image
                source={{ uri: selectedPharmacie.images[0] }}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                backgroundColor: COLORS.white,
                padding: 5,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {selectedPharmacie.name}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.address}
              </Text>

              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.phone}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.email}
              </Text>

              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.openingHours} -{" "}
                {selectedPharmacie.closingHours}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                Services :{" "}
                {selectedPharmacie.services.map((service) => service + ", ")}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.onGuard ? "On Guard" : "Not On Guard"}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.gray }}>
                {selectedPharmacie.reviews.length > 0
                  ? selectedPharmacie.reviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / selectedPharmacie.reviews.length
                  : 0}{" "}
                Reviews
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
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
        Found {data.length} Pharmacies
      </Text>

      <FlatList
        style={{
          marginTop: 10,
          marginLeft: 5,
        }}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedPharmacie(item);
              setModalVisible(true);
            }}
          >
            <PharmaciePost post={item} />
          </TouchableOpacity>
        )}
      />
      <View>{model()}</View>
    </View>
  );
}
