import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Form from "../Form/Form";

const Login = () => {

  return (
    <ImageBackground
      source={require("../../image/Photo_BG.png")}
      style={styles.container}
    >
      <Form
        title="Увійти"
        buttonText="Увійти"
        showNameInput={false}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
});

export default Login;
