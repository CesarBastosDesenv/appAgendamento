import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../../app/(auth)/login/style";
import { useAuth } from "../../app/authContext";



export default function Login() {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
    router.replace("/(tabs)/home");
  };

   const handleCadastro = async () => {
    
    router.replace("/(auth)/cadastro");

  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container }
    >
         <Image
              source={require("../../assets/images/barber.png")}
              style={styles.logo}
              resizeMode="contain"
            />


     <Text style={styles.titleImput}>Bem-vindo de Volta!</Text><View style={styles.BoxInput}>
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

            <Text style={styles.textCadastro}>
              Não tem seu cadastro? Solicite em: 
            </Text>
            <Text style={styles.textCadastroEmail}>
              suporteBarber@gmail.com 
            </Text>
            
    </View>
  </TouchableWithoutFeedback>
  );
}
