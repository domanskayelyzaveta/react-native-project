
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../config/firebase.config"


export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { email, password, name, avatar } = userData;
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("RESPONSE:", response);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });

      const data = {
        user: {
          name: response.user.displayName,
          email: response.user.email,
          id: response.user.uid,
          avatar: response.user.photoURL,
        },
      };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        type: "auth/login/rejected",
        payload: {
          errorMessage: error.message,
        },
        error: {
          message: "Rejected",
        },
        meta: {
        },
      });
    }
  }
);

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
      try {
        console.log("loginThunk is called");
        const { email, password } = userData;
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("RESPONSE:", response);
  
        const data = {
          user: {
            name: response.user.displayName,
            email: response.user.email,
            id: response.user.uid,
            avatar: response.user.photoURL,
          },
        };
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue({
          type: "auth/login/rejected",
          payload: {
            errorMessage: error.message,
          },
          error: {
            message: "Rejected",
          },
          meta: {},
        });
      }
    }
  );

  export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
      try {
        console.log("logoutThunk is called");
        await signOut(auth);
        return;
      } catch (error) {
        return rejectWithValue(error._message);
      }
    }
  );


  // export const logoutThunk = createAsyncThunk("auth/logout",(
  //   async (_, thunkAPI) => {
  //     try {
  //       console.log("logoutThunk is called");
  //       await signOut(auth);
  //       return;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue({
  //         type: "auth/login/rejected",
  //         payload: {
  //           errorMessage: error.message,
  //         },
  //         error: {
  //           message: "Rejected",
  //         },
  //         meta: {},
  //       });
  //     }
  //   }
  // ));

 