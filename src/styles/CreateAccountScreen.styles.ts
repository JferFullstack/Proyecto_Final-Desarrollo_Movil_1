import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#72999A",
  },
  header: {
    flexDirection: "row",
    marginTop: 119,
    marginBottom: 76,
    marginHorizontal: 47,
    alignItems: "center",
  },
  logo: {
    width: 86,
    height: 86,
    marginRight: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 26,
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 92,
    paddingVertical: 74,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  cardTitle: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 21,
  },
  inputGroup: {
    alignSelf: "stretch",
    marginBottom: 21,
  },
  label: {
    color: "#000000",
    fontSize: 28,
    marginBottom: 13,
    marginLeft: 2,
  },
  input: {
    height: 37,
    backgroundColor: "#FFFFFF",
    borderColor: "#72999AE3",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#72999A",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 58,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 32,
    textAlign: "center",
  },
});

export default styles;