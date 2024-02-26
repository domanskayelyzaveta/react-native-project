import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Home from "./Home";
import { useNavigation } from "@react-navigation/native";
import CreatePost from "../CreatePostScreen/CreatePost";


const Tab = createBottomTabNavigator();




const HomeFloorNavigation = () => {

  const navigation = useNavigation();


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 90,
          paddingTop: 9,
          paddingHorizontal: 82,
        },
      }}
    >
      <Tab.Screen
        name="PhotoFeed"
        component={Home}
        options={{
          headerShown: false,
        
          tabBarIcon: () => (
            <AntDesign name="appstore-o" size={24} color="#212121CC" />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="AddPhoto"
        component={CreatePost}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity
            // onPress={handleCreatePost}
            // onPress={() => navigation.navigate('CreatePost')}
              {...props}
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#FF6C00",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto name="plus-a" size={14} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="UserInfo"
        component={"#"}
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="user" size={24} color="#212121CC" />,
          tabBarLabel: "",
          tabBarStyle: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      />
    </Tab.Navigator>
  );
};





export default HomeFloorNavigation;
