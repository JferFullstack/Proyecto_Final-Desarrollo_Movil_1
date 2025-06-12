import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App";
import styles from "../styles/LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    if (email === '' || password === '') {
        Alert.alert('Error', 'Por favor, ingresa tu correo y contraseña.');
        return;
    }

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/czHwqhbh8m/8rpx2keu_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.logo}
          />
          <Text style={styles.title}>Huellitas HN</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Inicio de Sesión</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="ejemplo_correo@gmail.com"
              placeholderTextColor="#999999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.passwordGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#999999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}