import React from "react";
import {SafeAreaView,ScrollView,View,Text,Image,TextInput,TouchableOpacity,} from "react-native";
import styles from "../styles/LoginScreen.styles";

export function CreateAccountScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
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
          <Text style={styles.cardTitle}>Crear Cuenta</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}