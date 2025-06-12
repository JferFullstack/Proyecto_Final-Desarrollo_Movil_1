import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TextInput } from "react-native";
import styles from "../styles/LoginScreen.styles";

export function LoginScreen() {
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
            <TextInput style={styles.input} placeholder="ejemplo_correo@gmail.com" 
              placeholderTextColor="#999999" />
          </View>

          <View style={styles.passwordGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#999999" 
              secureTextEntry
            />
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
