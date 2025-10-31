import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../(tabs)/atendimentos/style";




export default function Home() {

    
  const barbers = [
  {
    id: 1,
    name: "Barbearia Estilo",
    address: "Av. Central, 123 - Rio de Janeiro",
    image: require("../../../assets/images/barberEstilo.png"),
  },
  {
    id: 2,
    name: "Corte Fino",
    address: "Rua das Palmeiras, 45 - Niterói",
    image: require("../../../assets/images/barberCorteFino.png"),
  },
  {
    id: 3,
    name: "Barber King",
    address: "Av. Atlântica, 999 - Copacabana",
    image: require("../../../assets/images/barberKing.png"),
  },
];

 
  return (
   <ScrollView style={styles.container}>
   <View style={styles.container} >
     <View style={styles.View}>
  
      {/* Texto à esquerda */}
      <Text style={styles.Text}>
        Atendimentos Realizados
      </Text>

      {/* Botão à direita */}
      <TouchableOpacity>
        <Ionicons name="list-outline" size={28} color="#2E2E2E" />
      </TouchableOpacity>
   </View >

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
   
  </View>
 </ScrollView>  
  );
}

