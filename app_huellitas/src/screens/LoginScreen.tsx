import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App";
import styles from "../styles/LoginScreen.style";
import { loginUser } from '../services/auth.service';

export function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (email === '' || password === '') {
      setErrorMessage('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    try {
      const result = await loginUser({ email, password });

      if (result.success) {
        console.log('Inicio de sesión exitoso');
        console.log('Mensaje:', result.message);
        if (result.token) {
          console.log('Token recibido:', result.token);
        }
        Alert.alert('Éxito', result.message || 'Inicio de sesión exitoso.');
        // navigation.navigate('Home'); // Descomenta esta línea cuando tengas tu pantalla Home
      } else {
        setErrorMessage(result.message || 'Error desconocido al iniciar sesión.');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setErrorMessage('No se pudo conectar con el servidor. Intenta de nuevo más tarde.');
    }
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
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/czHwqhbh8m/l4rkvp4x_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.logo}
          />
          <Text style={styles.title}>Huellitas HN</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Iniciar Sesión</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="ejemplo_2@correo.com"
              placeholderTextColor="#999999"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.passwordGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#999999"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}
            style={styles.linkButton}
          >
            <Text style={styles.linkButtonText}>¿No tienes cuenta? Regístrate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
