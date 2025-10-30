import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type SearchButtonProps = {
  onPress?: () => void;
  label?: string;
  children?: React.ReactNode; // 👈 permite usar conteúdo dentro da tag
};

export default function SearchButton({ onPress, label, children }: SearchButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name="search-outline" size={20} color="#000" style={{ marginRight: 6 }} />
      {children ? <>{children}</> : <Text style={styles.label}>{label ?? "Buscar"}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4af37",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
