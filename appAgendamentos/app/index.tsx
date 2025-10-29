import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "./authContext";

export default function Index() {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(auth)/login");
    }
  }, [isLoggedIn]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#d4af37" />
    </View>
  );
}
