import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AgendamentoCard() {
  return (
    <View style={styles.card}>
      {/* Parte superior */}
      <View style={styles.topRow}>
        <Image
          source={require("../../../assets/images/barber.png")} // substitua pelo seu ícone
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Bonieky Lacerda</Text>
          <Text style={styles.service}>Corte masculino</Text>
        </View>
        <Text style={styles.price}>R$ 29,90</Text>
      </View>

      {/* Parte inferior */}
      <View style={styles.bottomRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>25/08/2020</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>13:00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E0F7FA",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  service: {
    fontSize: 14,
    color: "#444",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: "#00BCD4",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
