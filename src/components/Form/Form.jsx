import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Avatar from "../Avatar/Avatar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, registerThunk } from "../../redux/thunk";
import { selectName, selectToken, selectUser } from "../../redux/selectors";

const Form = ({ title, buttonText, showNameInput }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  console.log("USER",user)


  const handleImageSelected = (imageUri) => {
    setAvatar(imageUri);
  };


  const onRegister = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    }
    try {
      await dispatch(registerThunk(data));
      console.log("DATA",data);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Помилка реєстрації:", error);
    }
  };
  

  const onLogin = async () => {
    const data = {
      email: email,
      password: password,
    }
    try {
      await dispatch(loginThunk(data));
      console.log("log data:", data);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Помилка авторизації", error);
    }
  };




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.registerDiv}>
        <View style={styles.avatar}>
        <Avatar onImageSelected={handleImageSelected}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputWrapper}>
          {showNameInput && (
            <TextInput
              placeholder="Логін"
              value={name}
              autoFocus={true}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
          )}
          <TextInput
            placeholder="Адреса електронної пошти"
            value={email}
            autoFocus={true}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              value={password}
              autoFocus={true}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
            />
            <TouchableOpacity style={styles.spanTextContainer}>
              <Text style={styles.spanText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={showNameInput ? onRegister : onLogin}
        >
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>

        {showNameInput ? (
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.qaText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={()=> navigation.navigate("Registration")}>
            <Text style={styles.qaText}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        )}

        </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  registerDiv: {
    backgroundColor: "white",
    height: 549,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 32,
  },
  input: {
    height: 50,
    width: 375,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 23,
    position: "relative",
  },
  registerBtn: {
    width: 375,
    height: 50,
    padding: 16,
    borderRadius: 30,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
  spanTextContainer: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  spanText: {
    color: "#1B4371",
  },
  avatar: {
    position: "absolute",
    top: -60,
  },
  qaText: {
  color: "#1B4371",
  fontSize: 16,
  fontWeight: 400,
  }
});

export default Form;
