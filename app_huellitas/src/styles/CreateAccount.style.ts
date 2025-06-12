import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#72999A",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.15,
    marginBottom: height * 0.08,
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.18,
    height: width * 0.18,
    marginRight: width * 0.02,
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
    marginTop: height * 0.08,
    flex: 1,
    alignItems: "center", // Mantiene la tarjeta centrada horizontalmente
    paddingHorizontal: width * 0.08, // <-- CLAVE: Espaciado lateral para todo el contenido de la tarjeta
  },
  welcomeText: {
    color: "#000000",
    fontSize: width * 0.1,
    fontWeight: "bold",
    marginBottom: height * 0.03,
    // marginHorizontal: width * 0.1, // <-- ELIMINADO: Ahora el paddingHorizontal del card lo maneja
    textAlign: "center",
  },
  description: {
    color: "#000000",
    fontSize: width * 0.06,
    marginBottom: height * 0.05,
    // marginHorizontal: width * 0.1, // <-- ELIMINADO: Ahora el paddingHorizontal del card lo maneja
    textAlign: "center",
  },
  cardTitle: {
    color: "#000000",
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.04,
  },
  inputGroup: {
    alignSelf: "stretch", // <-- CLAVE: Asegura que el inputGroup ocupe el ancho disponible dentro del card
    marginBottom: height * 0.03,
  },
  passwordGroup: {
    alignSelf: "stretch", // También para el grupo de contraseña
    marginBottom: height * 0.05,
  },
  label: {
    color: "#000000",
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    marginLeft: 0, // <-- REVISADO: Eliminar margin para que el paddingHorizontal del card lo maneje
  },
  input: {
    height: height * 0.06,
    backgroundColor: "#FFFFFF",
    borderColor: "#72999AE3",
    borderRadius: width * 0.02,
    borderWidth: 1,
    paddingHorizontal: width * 0.04, // <-- CLAVE: Mantiene el padding interno del input
    color: "#000000",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#72999A",
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    // marginHorizontal: width * 0.1, // Esto ahora lo manejará el padding de la tarjeta y alignSelf: "stretch"
    paddingVertical: height * 0.025,
    alignSelf: "stretch", // CLAVE: Para que el botón se estire dentro del card padding
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: width * 0.07,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    // alignSelf: "stretch", // Opcional, pero ayuda a centrar si el texto es muy corto
  },
  linkButton: {
    marginTop: height * 0.02,
    paddingVertical: height * 0.01,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#72999A', // Asegúrate de que este color sea el correcto para el enlace
    fontSize: width * 0.045,
  },
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: width * 0.02,
    overflow: 'hidden',
    backgroundColor: '#fefefe',
    height: height * 0.06,
    justifyContent: 'center',
  },
  picker: {
    height: '100%',
    width: '100%',
    color: '#333',
  },
});

export default styles;
