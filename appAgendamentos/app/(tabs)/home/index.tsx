import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../authContext";

export default function Home() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 20, marginBottom: 20 }}>
        Bem-vindo à Home
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#d4af37",
          padding: 12,
          borderRadius: 8,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: "#000", fontWeight: "bold" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
