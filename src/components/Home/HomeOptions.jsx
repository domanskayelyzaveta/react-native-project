import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { logoutThunk, registerThunk } from '../../redux/thunk';
import { useNavigation } from '@react-navigation/native';

export default HomeOptions = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleLogout = () => {
        dispatch(logoutThunk());
        navigation.navigate('Login');
    };

    return (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={handleLogout}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
      );
    }
