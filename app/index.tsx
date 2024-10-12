import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper__title}>
        <Text style={styles.wrapper__title__text}>Welcome back</Text>
      </View>
      <View style={styles.wrapper__form}>
        <TextInput
          placeholder="Username"
          style={styles.wrapper__form__field}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.wrapper__form__field}
        ></TextInput>
        <TouchableHighlight
          underlayColor={""}
          style={styles.wrapper__form__button}
        >
          <Text style={styles.wrapper__form__button__text}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  wrapper__title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper__title__text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  wrapper__form: {
    flex: 9,
    alignItems: "center",
    paddingTop: 24,
  },
  wrapper__form__field: {
    width: "90%",
    padding: 12,
    borderColor: "#dddddd",
    borderWidth: 1,
    marginBottom: 24,
    borderRadius: 8,
  },
  wrapper__form__button: {
    backgroundColor: "black",
    width: "90%",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  wrapper__form__button__text: {
    color: "white",
    fontWeight: "bold",
  },
});
