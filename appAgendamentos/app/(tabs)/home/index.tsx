import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../(tabs)/home/style";




export default function Home() {

  const [location, setLocation ] = useState("");

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
        Encontre o seu{"\n"}barbeiro favorito
      </Text>

      {/* Botão à direita */}
      <TouchableOpacity onPress={() => console.log("Botão clicado!")}>
        <Ionicons name="search-outline" size={26} color="#2E2E2E" />
      </TouchableOpacity>
   </View >

   <View style={styles.BoxInput}>
      <TextInput 
                style={styles.input}
                placeholder="Onde você está?"
                placeholderTextColor="#999"
                value={location}
                onChangeText={setLocation}
                keyboardType="default"
                autoCapitalize="none"
              />
               <Ionicons name="location-outline" size={20} color="#888" />
   </View>

    {barbers.map((barber) => (
           <View key={barber.id} style={styles.card}>
             {/* Imagem à esquerda */}
             <Image source={barber.image} style={styles.image} />
   
             {/* Informações à direita */}
             <View style={styles.info}>
               <Text style={styles.name}>{barber.name}</Text>
               <Text style={styles.address}>{barber.address}</Text>
   
               <TouchableOpacity style={styles.button} onPress={() => console.log(`Agendar com ${barber.name}`)}>
                 <Text style={styles.buttonText}>Agendar</Text>
               </TouchableOpacity>
             </View>
           </View>
         ))}
  </View>
 </ScrollView>  
  );
}

