import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BarbeiroScreen() {
  const { name } = useLocalSearchParams(); // 👈 recebendo o nome

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
      <Text style={{ fontSize: 24, color: "#fff" }}>Perfil do Barbeiro</Text>
      <Text style={{ fontSize: 20, color: "#d4af37", marginTop: 10 }}>
        {name ? name : "Nenhum barbeiro selecionado"}
      </Text>
    </View>
  );
}
