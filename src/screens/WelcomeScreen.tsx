import React from "react";
import {SafeAreaView,View,ScrollView,Image,Text,TouchableOpacity} from "react-native";
import styles from "../styles/WelcomeScreen.styles";

export function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Parte superior */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/czHwqhbh8m/k6f74oh0_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.logo}
          />
          <Text style={styles.title}>Huellitas HN</Text>
        </View>

        {/* Parte inferior siempre abajo */}
        <View style={styles.card}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.welcomeText}>
              Bienvenido a{"\n"}Huellitas HN
            </Text>
            <Text style={styles.description}>
              ¡Cuida a tus mascotas{"\n"}con facilidad!
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Crear Cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}