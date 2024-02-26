import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const Avatar = ({ onImageSelected }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageSelected(result.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.absolute}>
        <TouchableOpacity onPress={!image ? pickImage : handleRemoveImage}>
          {!image ? (
            <AntDesign name="pluscircleo" size={25} style={styles.bntAdd} />
          ) : (
            <AntDesign name="pluscircleo" size={25} style={styles.btnDel} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
  },
  absolute: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  bntAdd: {
    color: "#FF6C00",
  },
  btnDel: {
    transform: [{ rotate: "45deg" }],
    color: "#E8E8E8",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
});

export default Avatar;
