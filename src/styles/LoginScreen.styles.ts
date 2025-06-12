import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#71999A",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.12,
    marginBottom: height * 0.08,
  },
  logo: {
    width: width * 0.18,
    height: width * 0.18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: width * 0.09,
    fontWeight: "bold",
    marginTop: height * 0.02,
    marginLeft: width * 0.025,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: width * 0.22,
    borderTopRightRadius: width * 0.22,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.08,
    paddingHorizontal: width * 0.08,
  },
  cardTitle: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.04,
    color: "#000",
  },
  inputGroup: {
    marginBottom: height * 0.03,
  },
  passwordGroup: {
    marginBottom: height * 0.05,
  },
  label: {
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    color: "#333",
  },
  input: {
    height: height * 0.06,
    backgroundColor: "#FFFFFF",
    borderColor: "#72999A",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
  },
  button: {
    backgroundColor: "#72999A",
    paddingVertical: height * 0.02,
    borderRadius: 20,
    alignItems: "center",
    marginTop: height * 0.02,
  },
  buttonText: {
    color: "#FFF",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
});

export default styles;
