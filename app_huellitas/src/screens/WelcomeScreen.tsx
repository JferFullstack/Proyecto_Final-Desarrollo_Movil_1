import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App";
import styles from "../styles/WelcomeScreen.style";

export function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
          <Text style={styles.welcomeText}>Bienvenido a Huellitas HN</Text>
          <Text style={styles.description}>
            ¡Cuida a tus mascotas con facilidad!
          </Text>

          {/* Botón "Crear Cuenta" (primer botón, estilo normal) */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateAccount')}
          >
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>

          {/* Botón "Iniciar Sesión" (segundo botón, estilo normal) */}
          <TouchableOpacity
            style={styles.button} // Ambos botones usan el mismo estilo 'button'
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
