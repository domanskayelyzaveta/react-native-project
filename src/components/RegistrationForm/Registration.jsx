// import React, { useState } from "react";
// // import Form from "../Form/Form";

// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Button,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import Avatar from "../Avatar/Avatar";

// const Registration = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onRegister = () => {
//     const data = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     console.log(data);
//   };

//   return (
//     <ImageBackground
//       source={require("../../image/Photo_BG.png")}
//       style={styles.container}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <View style={styles.registerDiv}>
//             <View style={styles.avatar}>
//               <Avatar />
//             </View>
//             <Text style={styles.title}>Реєстрація</Text>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 placeholder="Логін"
//                 value={name}
//                 autoFocus={true}
//                 onChangeText={(text) => setName(text)}
//                 style={styles.input}
//               />
//               <TextInput
//                 placeholder="Адреса електронної пошти"
//                 value={email}
//                 autoFocus={true}
//                 onChangeText={(text) => setEmail(text)}
//                 style={styles.input}
//               />
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   placeholder="Пароль"
//                   secureTextEntry={true}
//                   value={password}
//                   autoFocus={true}
//                   onChangeText={(text) => setPassword(text)}
//                   style={styles.input}
//                 />
//                 <TouchableOpacity style={styles.spanTextContainer}>
//                   <Text style={styles.spanText}>Показать</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.registerBtn} onPress={onRegister}>
//               <Text style={styles.btnText}>Register</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => alert("Нажали на ссылку")}>
//               <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     justifyContent: "flex-end",
//     backgroundColor: "red",
//   },
//   registerDiv: {
//     backgroundColor: "white",
//     height: 549,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 25,
//     position: "relative",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "500",
//     marginBottom: 32,
//   },
//   input: {
//     height: 50,
//     width: 375,
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: "#F6F6F6",
//   },
//   inputWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 16,
//     marginBottom: 23,
//     position: "relative",
//   },
//   registerBtn: {
//     width: 375,
//     height: 50,
//     padding: 16,
//     borderRadius: 30,
//     marginBottom: 16,
//     backgroundColor: "#FF6C00",
//   },
//   btnText: {
//     textAlign: "center",
//     color: "white",
//   },
//   loginText: {
//     fontSize: 16,
//     fontWeight: "400",
//     color: "#1B4371",
//   },
//   spanTextContainer: {
//     position: "absolute",
//     top: 16,
//     right: 16,
//   },
//   spanText: {
//     color: "#1B4371",
//   },
//   avatar: {
//     position: "absolute",
//     top: -60,
//   },
// });

// export default Registration;

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Form from "../Form/Form";

const Registration = () => {

  return (
    <ImageBackground
      source={require("../../image/Photo_BG.png")}
      style={styles.container}
    >
      <Form
        title="Реєстрація"
        buttonText="Register"
        showNameInput={true}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default Registration;
