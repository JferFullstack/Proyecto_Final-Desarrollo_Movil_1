import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { CreateAccountScreen } from './src/screens/CreateAccountScreen';
import { LoginScreen } from './src/screens/LoginScreen';

export type RootStackParamList = {
  Welcome: undefined;
  CreateAccount: undefined;
  Login: undefined;
  Home: undefined;
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>¡Bienvenido!</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Has iniciado sesión.</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        id={undefined} 
      >
        {/* Tu pantalla de bienvenida */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Oculta el header de la pantalla de bienvenida
        />
        {/* Tu pantalla de inicio de sesión */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Iniciar Sesión' }}
        />
        {/* Tu pantalla de crear cuenta */}
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: 'Crear Cuenta' }}
        />
        {/* Agrega tu pantalla Home aquí si la vas a usar */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}