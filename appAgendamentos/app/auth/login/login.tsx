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
import { styles } from "../../../app/auth/login/style";

export default function PageLogin() {
  const router = useRouter();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Aqui você pode validar o login futuramente (ex: verificar email/senha)
    // Por enquanto, apenas redireciona para a home
    router.replace("/(tabs)/home/home"); 
    // use replace() para que o usuário não volte com o botão de "voltar"
  }

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

            <Text style={styles.titleImput}>Bem-vindo de Volta!</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            
            <Text style={styles.textCadastro}>Ainda não tem seu cadastro?</Text>
            <TouchableOpacity
              onPress={() => router.navigate("/auth/cadastro/cadastro")}>
            
              <Text style={styles.link}>
                Criar nova conta
              </Text>
            </TouchableOpacity>
          </View>
         
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}