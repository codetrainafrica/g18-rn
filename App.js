import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("./assets/profile.png")} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  profileContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  input: {
    borderWidth: 2,
    borderColor: "red",
  },
});

export default App;
