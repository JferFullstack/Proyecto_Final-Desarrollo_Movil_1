import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#71999A",
  },
  container: {
    flex: 1,
    // Eliminar justifyContent: "flex-start" o cambiar a "center" si quieres que todo el contenido se centre verticalmente
    // O mantener flex-start si quieres que el header y la card se apilen desde arriba.
    // Para que el título se "baje" con el resto, nos enfocaremos en el header.
  },
  header: {
    flexDirection: "row",
    // Ajustamos el marginTop para que sea un porcentaje del alto de la pantalla.
    // Esto permitirá que el header se "baje" o "suba" proporcionalmente con la altura del dispositivo.
    marginTop: height * 0.15, // Aumenta este valor si quieres que baje más.
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.18,
    height: width * 0.18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: width * 0.09,
    fontWeight: "bold",
    marginLeft: width * 0.03,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: width * 0.22,
    borderTopRightRadius: width * 0.22,
    paddingTop: height * 0.04,
    paddingBottom: height * 0.08,
    // Aseguramos que el marginTop de la tarjeta también sea un porcentaje
    marginTop: height * 0.08, // Puedes ajustar este valor si quieres más espacio entre el header y la tarjeta.
    flex: 1, // Esto hace que la tarjeta ocupe el espacio restante
  },
  scrollContent: {
    flexGrow: 1, // Permite que el contenido dentro del ScrollView se expanda
    justifyContent: 'center', // Centra el contenido verticalmente dentro de la tarjeta
    paddingBottom: height * 0.08,
  },
  welcomeText: {
    color: "#000000",
    fontSize: width * 0.1,
    fontWeight: "bold",
    marginBottom: height * 0.03,
    marginHorizontal: width * 0.1,
    textAlign: "center",
  },
  description: {
    color: "#000000",
    fontSize: width * 0.06,
    marginBottom: height * 0.05,
    marginHorizontal: width * 0.1,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#72999A",
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: width * 0.07,
  },
});

export default styles;