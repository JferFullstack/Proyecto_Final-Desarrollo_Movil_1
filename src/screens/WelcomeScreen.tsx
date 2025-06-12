import React from "react";
import {SafeAreaView,View,ScrollView,Image,Text,TouchableOpacity} from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App";
import styles from "../styles/WelcomeScreen.styles";

export function WelcomeScreen() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount'); 
  };

  const handleLogin = () => {
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.container}>
          {/* Header */}
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

          {/* Card */}
          <View style={styles.card}>
            <View style={styles.scrollContent}>
              <Text style={styles.welcomeText}>
                Bienvenido a{"\n"}Huellitas HN
              </Text>
              <Text style={styles.description}>
                ¡Cuida a tus mascotas{"\n"}con facilidad!
              </Text>

              <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}>Crear Cuenta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}