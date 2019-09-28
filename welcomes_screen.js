import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Welcomescreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/Lovejoy_HiCharles.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "contain"
  }
});
