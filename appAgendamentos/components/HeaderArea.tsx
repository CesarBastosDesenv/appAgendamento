// app/components/HeaderArea.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderArea() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Cesar! Encontre o {"\n"}barbeiro favorito
      <Ionicons name="search-outline" size={26} color="#fff" />  
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#d4af37",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
