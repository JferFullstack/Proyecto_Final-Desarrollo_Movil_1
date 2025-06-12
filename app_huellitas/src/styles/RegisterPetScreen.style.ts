import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: height * 0.1, // Espacio para la barra de navegación inferior
  },
  // --- Estilos para el nuevo "navbar" de pestañas ---
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#72999A", // Color de fondo del navbar
    height: height * 0.08,
    paddingHorizontal: width * 0.05,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.015,
    borderRadius: width * 0.01,
  },
  tabButtonActive: {
    borderBottomWidth: 3, // Línea inferior
    borderColor: "#FFFFFF", // Color blanco para la línea activa
  },
  tabButtonText: {
    color: "#FFFFFF",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  // --- Fin de estilos para el "navbar" de pestañas ---

  imagePickerContainer: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    backgroundColor: "#72999A",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height * 0.04,
    marginBottom: height * 0.04,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cameraIcon: {
    fontSize: width * 0.15,
    color: "#FFFFFF",
  },
  plusIcon: {
    position: "absolute",
    bottom: height * 0.01,
    right: width * 0.01,
    fontSize: width * 0.06,
    color: "#FFFFFF",
    backgroundColor: "#5cb85c",
    borderRadius: width * 0.03,
    padding: width * 0.01,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: "#FFFFFF",
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: width * 0.08,
  },
  inputGroup: {
    alignSelf: "stretch",
    marginBottom: height * 0.03,
  },
  label: {
    color: "#000000",
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    marginLeft: 0,
  },
  input: {
    height: height * 0.06,
    backgroundColor: "#FFFFFF",
    borderColor: "#72999AE3",
    borderRadius: width * 0.02,
    borderWidth: 1,
    paddingHorizontal: width * 0.04,
    color: "#000000",
    fontSize: width * 0.04,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#72999AE3',
    borderRadius: width * 0.02,
    borderWidth: 1,
    height: height * 0.06,
    paddingHorizontal: width * 0.04,
    backgroundColor: "#FFFFFF",
  },
  dateInputText: {
    flex: 1,
    color: "#000000",
    fontSize: width * 0.04,
  },
  calendarIcon: {
    fontSize: width * 0.06,
    color: "#999",
    marginLeft: width * 0.02,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#72999A",
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    paddingVertical: height * 0.025,
    alignSelf: "stretch",
    marginTop: height * 0.03,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: width * 0.07,
    fontWeight: "bold",
  },
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    height: height * 0.1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  navBarButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: height * 0.01,
  },
  navBarButtonText: {
    fontSize: width * 0.03,
    color: "#999",
    marginTop: height * 0.005,
  },
  navBarButtonIcon: {
    fontSize: width * 0.06,
    color: "#999",
  },
  navBarButtonActive: {
    color: "#72999A",
  },
  // Eliminamos los estilos 'header' y 'title' si se reemplazan por el navbar
  // header: { ... },
  // title: { ... },
});

export default styles;