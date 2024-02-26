import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";



const Home = () => {

    const user = useSelector(selectUser);

    return (
      <View style={styles.container}>
        <View>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
  
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    backgroundColor: "white"
    },
    textContainer: {
    justifyContent: "center",
    },
    textStyle: {
        fontSize: 13,
        fontWeight: "700",
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 16,
    },
  });
  
export default Home;
