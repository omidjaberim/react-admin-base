import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {IAuth} from "model/dto/auth" 
export interface AuthState {
  isLogin: boolean;
  token : string;
  permissions : string[];
}

const initialState: AuthState = {
  isLogin : false,
  token : "",
  permissions:[]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action: PayloadAction<IAuth>) => {
        state.isLogin = true;
        state.token = action.payload.token;
        state.permissions = action.payload.permissions;
    },
    logOut : (state) => {
        state.isLogin = false;
        state.token = "";
        state.permissions = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logOut } = authSlice.actions

export default authSlice.reducer