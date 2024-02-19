import {
  FlatList,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import PharmacieItem from "./pharmacieItem";
import COLORS from "@/constants/Colors";
import fetchData from "@/api/axois";
import { useState } from "react";
import { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Listpharmacie() {
  const [pharmacies, setPharmacies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPharmacie, setSelectedPharmacie] = useState({
    nom: "",
    telephone: "",
    type: "",
    date: "",
    gmaps: "",
  });

  useEffect(() => {
    const fetchPharmacies = async () => {
      const data = await fetchData();
      setPharmacies(data);
    };
    fetchPharmacies();
  }, []);

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
          <TouchableOpacity
            onPress={() => {
              setSelectedPharmacie(item);
              setModalVisible(true);
            }}
          >
            <PharmacieItem pharmacie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
