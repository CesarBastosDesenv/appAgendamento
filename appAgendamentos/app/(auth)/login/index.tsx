import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../authContext";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
    router.replace("/(tabs)/home");
  };

  return (
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 22, marginBottom: 20 }}>
        Login do App
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#d4af37",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={handleLogin}
      >
        <Text style={{ fontWeight: "bold", color: "#000" }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 25 }}
        onPress={() => router.push("/(auth)/cadastro")}
      >
        <Text style={{ color: "#d4af37" }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
  );
}
