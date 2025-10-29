import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MenuTabs() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingBottom: Platform.OS === "android" ? insets.bottom : 0,
      }}
    >
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#d4af37",
          tabBarInactiveTintColor: "#777",
          tabBarStyle: {
            backgroundColor: "#111",
            borderTopColor: "#222",
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom || 8,
          },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case "home":
                iconName = "home-outline";
                break;
              case "agendamento":
                iconName = "calendar-outline";
                break;
              case "avaliacao":
                iconName = "star-outline";
                break;
              case "barbeiro":
                iconName = "person-outline";
                break;
              default:
                iconName = "ellipse-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="(tabs>/home" options={{ title: "Home" }} />
        <Tabs.Screen name="agendamento" options={{ title: "Agendamento" }} />
        <Tabs.Screen name="avaliacao" options={{ title: "Avaliação" }} />
        <Tabs.Screen name="barbeiro" options={{ title: "Barbeiro" }} />
      </Tabs>
    </SafeAreaView>
  );
}
