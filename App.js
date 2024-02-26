import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "./src/components/RegistrationForm/Registration";
import Login from "./src/components/LoginForm/LoginForm";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Text } from "react-native";
import store, { persistor } from "./src/redux/store";
import HomeOptions from "./src/components/Home/HomeOptions";
import HomeFloorNavigation from "./src/components/Home/HomeFloorNavigation";
import CreatePost from "./src/components/CreatePostScreen/CreatePost";

const MainStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Tab.Screen name="Options" component={HomeOptions}  options={{ headerShown: false }}  />
//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Home"
              component={HomeFloorNavigation}
              options={({ navigation }) => ({
                headerRight: () => <HomeOptions navigation={navigation} />,
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

