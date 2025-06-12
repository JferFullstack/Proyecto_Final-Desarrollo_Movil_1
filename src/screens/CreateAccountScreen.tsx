import React, { useState } from "react";
import {SafeAreaView,ScrollView,View,Text,Image,TextInput,TouchableOpacity,Alert,Platform} from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import { registerUser } from '../services/auth.service';
import styles from "../styles/CreateAccountScreen.styles";


export function CreateAccountScreen() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [fechaNacimiento, setFechaNacimiento] = useState<Date>(new Date()); 
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false); 
  const [sexo, setSexo] = useState<'Masculino' | 'Femenino' | 'Otro' | 'Prefiero no decir'>('Prefiero no decir'); 
  const [telefono, setTelefono] = useState<string>(''); 
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || fechaNacimiento;
    setShowDatePicker(Platform.OS === 'ios'); 
    setFechaNacimiento(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleCreateAccount = async () => {
    setErrorMessage(''); 

    if (!nombre || !apellido || !email || !password || !confirmPassword || !fechaNacimiento || sexo === 'Prefiero no decir') {
      Alert.alert('Error', 'Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const formattedDate = fechaNacimiento.toISOString().split('T')[0];

    try {
      const result = await registerUser({
        nombre,
        apellido,
        email,
        password,
        fechaNacimiento: formattedDate,
        sexo,
        telefono: telefono || undefined, 
      });

      if (result.success) {
        Alert.alert('¡Éxito!', result.message || 'Cuenta creada con éxito. Ahora inicia sesión.');
        navigation.navigate('Login');
      } else {
        setErrorMessage(result.message || 'No se pudo crear la cuenta.');
      }
    } catch (error) {
      console.error('Error de red al intentar registrar:', error);
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
          <Text style={styles.cardTitle}>Crear Cuenta</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Tu nombre"
              placeholderTextColor="#999999"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder="Tu apellido"
              placeholderTextColor="#999999"
              value={apellido}
              onChangeText={setApellido}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="ejemplo_correo@gmail.com"
              placeholderTextColor="#999999"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Confirma tu contraseña"
              placeholderTextColor="#999999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.input}>
              <Text style={{ color: fechaNacimiento ? '#333' : '#999999', lineHeight: 30 }}> {/* Ajusta lineHeight si es necesario */}
                {fechaNacimiento.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={fechaNacimiento}
                mode="date"
                display="default" 
                onChange={onDateChange}
                maximumDate={new Date()} 
              />
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sexo</Text>
            <View style={styles.pickerContainer}> 
              <Picker
                selectedValue={sexo}
                onValueChange={(itemValue) => setSexo(itemValue)}
                style={styles.picker} 
              >
                <Picker.Item label="Selecciona" value="Prefiero no decir" enabled={false} />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Femenino" value="Femenino" />
                <Picker.Item label="Otro" value="Otro" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Teléfono (Opcional)</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Ej: 99887766"
              placeholderTextColor="#999999"
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.linkButton}
          >
            <Text style={styles.linkButtonText}>¿Ya tienes una cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}