// import React, { useState } from "react";
// import Form from "../Form/Form";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <ImageBackground
//       source={require("../../image/Photo_BG.png")}
//       style={styles.container}
//     >
//       <View style={styles.registerDiv}>
//         <Text style={styles.title}>Увійти</Text>
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Адреса електронної пошти"
//             value={email}
//             autoFocus={true}
//             onChangeText={(text) => setEmail(text)}
//             style={styles.input}
//           />
//           <View style={styles.inputWrapper}>
//             <TextInput
//               placeholder="Пароль"
//               secureTextEntry={true}
//               value={password}
//               autoFocus={true}
//               onChangeText={(text) => setPassword(text)}
//               style={styles.input}
//             />
//             <TouchableOpacity style={styles.spanTextContainer}>
//               <Text style={styles.spanText}>Показать</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.registerBtn}>
//           <Text style={styles.btnText}>Register</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert("Нажали на ссылку")}>
//           <Text style={styles.loginText}>Немає акаунту? Зареєструватися</Text>
//         </TouchableOpacity>
//       </View>
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
//     height: 489,
//     paddingTop: 32,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     backgroundColor: "white",
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
// });
