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
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.1,
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
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: width * 0.22,
    borderTopRightRadius: width * 0.22,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.08,
    paddingHorizontal: width * 0.08,
    alignItems: "center",
    flex: 1,
  },
  cardTitle: {
    color: "#000000",
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.04,
  },
  inputGroup: {
    alignSelf: "stretch",
    marginBottom: height * 0.03,
  },
  passwordGroup: {
    marginBottom: height * 0.05,
  },
  label: {
    color: "#000000",
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    marginLeft: width * 0.005,
  },
  input: {
    height: height * 0.06,
    backgroundColor: "#FFFFFF",
    borderColor: "#72999AE3",
    borderRadius: width * 0.02,
    borderWidth: 1,
    paddingHorizontal: width * 0.04,
    color: "#000000",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#72999A",
    borderRadius: width * 0.05,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
    alignSelf: "stretch", 
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
  },
  linkButton: {
    marginTop: height * 0.02,
    paddingVertical: height * 0.01,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#72999A',
    fontSize: width * 0.045,
  },
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
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
