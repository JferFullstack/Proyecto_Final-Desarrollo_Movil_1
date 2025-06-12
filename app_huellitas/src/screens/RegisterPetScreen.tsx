import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, TouchableOpacity, Platform, Alert, Dimensions, } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import styles from '../styles/RegisterPetScreen.style';

// Desestructura width y height aquí para que estén disponibles en el componente
const { width, height } = Dimensions.get("window");

// Define tus parámetros de navegación como en tu App.tsx
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
  RegisterPet: undefined;
  MascotasScreen: undefined; // <-- Asegúrate de tener esta ruta si vas a navegar a ella
  CalendarioScreen: undefined;
  NotificacionesScreen: undefined;
  ConfiguracionScreen: undefined;
};

export function RegisterPetScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estado para controlar la pestaña activa: 'pets' o 'register'
  type ActiveTab = 'pets' | 'register';
  const [activeTab, setActiveTab] = useState<ActiveTab>('register'); // Por defecto, 'Registrar mascota'

  const [petName, setPetName] = useState<string>('');
  const [petSpecies, setPetSpecies] = useState<string>('');
  const [petBreed, setPetBreed] = useState<string>('');
  const [petGender, setPetGender] = useState<string>('');
  const [petDob, setPetDob] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePick = (): void => {
    Alert.alert(
      'Subir Foto',
      'Selecciona una opción',
      [
        {
          text: 'Abrir Galería',
          onPress: () => console.log('Abrir galería... (Implementar aquí con ImagePicker)'),
        },
        {
          text: 'Tomar Foto',
          onPress: () => console.log('Tomar foto... (Implementar aquí con ImagePicker)'),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date): void => {
    const currentDate = selectedDate || petDob;
    setShowDatePicker(Platform.OS === 'ios');
    setPetDob(currentDate);
  };

  const showDatepicker = (): void => {
    setShowDatePicker(true);
  };

  const handleSavePet = (): void => {
    if (!petName || !petSpecies || !petBreed || !petGender) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    const formattedDate: string = petDob.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    console.log('Registrando mascota:', {
      name: petName,
      species: petSpecies,
      breed: petBreed,
      gender: petGender,
      dob: formattedDate,
      image: selectedImage,
    });
    Alert.alert('Éxito', `Mascota ${petName} registrada.`);
    // Opcional: Navegar a la pantalla de la lista de mascotas después de un registro exitoso
    // navigation.navigate('MascotasScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Nuevo Navbar de Pestañas */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'pets' && styles.tabButtonActive]}
          onPress={() => {
            setActiveTab('pets');
            // Si quieres navegar a la pantalla "MascotasScreen" cuando se presiona, hazlo aquí:
            navigation.navigate('MascotasScreen' as any); // Usar 'as any' si la ruta no está en RootStackParamList
          }}
        >
          <Text style={styles.tabButtonText}>Mascotas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'register' && styles.tabButtonActive]}
          onPress={() => setActiveTab('register')}
        >
          <Text style={styles.tabButtonText}>Registrar mascota</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        {/* El contenido del formulario de registro */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.imagePickerContainer} onPress={handleImagePick}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%', borderRadius: width * 0.2 }} />
            ) : (
              <>
                <Icon name="camera" style={styles.cameraIcon} />
                <Text style={styles.plusIcon}>+</Text>
              </>
            )}
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de la mascota"
              placeholderTextColor="#999"
              value={petName}
              onChangeText={setPetName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Especie</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Perro, Gato, Ave"
              placeholderTextColor="#999"
              value={petSpecies}
              onChangeText={setPetSpecies}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Raza</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Labrador, Siames"
              placeholderTextColor="#999"
              value={petBreed}
              onChangeText={setPetBreed}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Edad</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.dateInputContainer}>
              <Text style={styles.dateInputText}>
                {petDob ? petDob.toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }) : 'dd/mm/aaaa'}
              </Text>
              <Icon name="calendar-month" style={styles.calendarIcon} />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={petDob || new Date()}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Género</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Macho, Hembra"
              placeholderTextColor="#999"
              value={petGender}
              onChangeText={setPetGender}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSavePet}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('MascotasScreen' as any)}>
          <Icon name="paw" style={[styles.navBarButtonIcon, styles.navBarButtonActive]} />
          <Text style={[styles.navBarButtonText, styles.navBarButtonActive]}>Mascota</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('CalendarioScreen' as any)}>
          <Icon name="calendar" style={styles.navBarButtonIcon} />
          <Text style={styles.navBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('NotificacionesScreen' as any)}>
          <Icon name="bell" style={styles.navBarButtonIcon} />
          <Text style={styles.navBarButtonText}>Notificaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={() => navigation.navigate('ConfiguracionScreen' as any)}>
          <Icon name="cog" style={styles.navBarButtonIcon} />
          <Text style={styles.navBarButtonText}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
