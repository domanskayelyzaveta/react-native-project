import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import axios from "axios";


const CreatePost = () => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("");




//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const coords = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       setLocation(coords);

//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
//       );
//       setCity(response.data.address.city);
//     })();
//   }, []);

  return  (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.svgBg}>
          <Entypo name="camera" size={20} color="#BDBDBD" />
        </View>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." style={styles.inputText} />
      {/* <View style={styles.inputContainer}>
        <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.icon} />
        <TextInput
          placeholder="Місцевість..."
          style={styles.inputText}
          placeholderTextColor="#BDBDBD"
          value={city}
        />
      </View>
       */}

<View style={styles.inputContainer}>
  <TouchableOpacity
    style={styles.icon}
    onPress={async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
      );
      setCity(response.data.address.city);
    }}
  >
    <Feather name="map-pin" size={24} color="#BDBDBD" />
  </TouchableOpacity>
  <TextInput
    placeholder="Місцевість..."
    style={styles.inputText}
    placeholderTextColor="#BDBDBD"
    value={city}
    onChangeText={setCity}
  />
</View>

      <TouchableOpacity style={styles.btnBg}>
        <Text style={styles.btnText}>Опубліковати</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnDel}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
  },
  photoContainer: {
    display: "flex",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    width: 378,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  svgBg: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "flex-start",
    textAlign: "left",
    marginBottom: 32,
    color: "#BDBDBD",
  },
  inputText: {
    width: 378,
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputContainer: {
    width: 378,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  icon: {
    marginRight: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "#BDBDBD",
  },
  btnBg: {
    width: 378,
    height: 52,
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: "50%",
    backgroundColor: "#F6F6F6",
  },
  btnDel: {
    alignItems: "center",
    width: 80,
    height: 55,
    marginTop: 120,
    paddingVertical: 16,
    borderRadius: "28px",
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePost;
