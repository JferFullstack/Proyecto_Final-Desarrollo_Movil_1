import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#71999A",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    marginTop: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  scrollContent: {
    paddingBottom: height * 0.02,
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
