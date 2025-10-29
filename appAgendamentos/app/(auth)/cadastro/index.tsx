import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CadastroScreen() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro</Text>
      
      <Button
        title="Voltar para Login"
        onPress={() => router.replace("/login")}
      />
    </View>
  </SafeAreaView>
  );
}
