import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../../../app/auth/cadastro/style";

export default function PageLogin() {
  const router = useRouter();  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/images/barber.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.titleImput}>Cadastro de Usuários</Text>

            
            <View style={styles.BoxInput}>
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                placeholderTextColor="#999"
                value={user}
                onChangeText={setUser}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Ionicons name="person-outline" size={20} color="#888" />
            </View>
            <View style={styles.BoxInput}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Ionicons name="mail-outline" size={20} color="#888" />
            </View>

            <View style={styles.BoxInput}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Ionicons name="key-outline" size={20} color="#888" />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            
            <Text style={styles.textCadastro}>Já possue cadastro?</Text>
            <TouchableOpacity
              onPress={() => router.navigate("/auth/login/login")}>
            
              <Text style={styles.link}>
                Faça Login
              </Text>
            </TouchableOpacity>
          </View>
         
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}