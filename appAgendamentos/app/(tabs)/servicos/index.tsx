import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../../(tabs)/servicos/style";

export default function BarbeiroScreen() {

   const servicos = [
    { id: "1", nome: "Corte masculino", preco: "R$ 29,90" },
    { id: "2", nome: "Corte masculino", preco: "R$ 29,90" },
    { id: "3", nome: "Corte masculino", preco: "R$ 29,90" },
    { id: "4", nome: "Corte masculino", preco: "R$ 29,90" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}></View>
        
       <View style={styles.infoArea} >
        <Text>Bonieky Lacerda</Text>
         <View style={styles.ratting}>
          
          <Ionicons name="star-outline" size={26} color="#2E2E2E" />
          <Text style={{ color: "#2E2E2E", marginLeft: 4 }}>4.7</Text>
          </View>
       </View>
      </View>
      <View >
        <Text style={styles.title}>Lista de serviços</Text>
       </View>
       <FlatList
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ServicoCard}>
            <View>
              <Text style={styles.ServicoNome}>{item.nome}</Text>
              <Text style={styles.ServicoPreco}>{item.preco}</Text>
            </View>
            <View style={styles.BotaoAgendar}>
              <Text style={styles.BotaoTexto}>Agendar</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.InfoCard}>
            <Text style={styles.InfoText}>
              ⭐ Bonieky Lacerda {"\n"}
              Barbeiro com anos de experiência e alto nível de atendimento.
              Recomendado demais!
            </Text>
          </View>
    </View>
  );
}

