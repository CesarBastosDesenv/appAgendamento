import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Tabs
        screenOptions={({ route }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "home/index":
              iconName = "home-outline";
              break;
            case "agendamento/index":
              iconName = "calendar-outline";
              break;
            case "avaliacao/index":
              iconName = "list-outline";
              break;
            case "barbeiro/index":
              iconName = "cut-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }

          return {
            headerShown: false,
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#777",
            tabBarStyle: {
              backgroundColor: "#111",
              borderTopColor: "#222",
              height: 30 + insets.bottom,
              paddingBottom: insets.bottom || 8,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
          };
        }}
      >
        <Tabs.Screen name="home/index" options={{ title: "Home" }} />
        <Tabs.Screen name="agendamento/index" options={{ title: "Agendamento" }} />
        <Tabs.Screen name="avaliacao/index" options={{ title: "Avaliação" }} />
        <Tabs.Screen name="barbeiro/index" options={{ title: "Barbeiro" }} />
      </Tabs>
    </SafeAreaView>
  );
}
