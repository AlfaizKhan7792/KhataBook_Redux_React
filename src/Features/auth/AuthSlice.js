import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./AuthService";

const userExist = JSON.parse(localStorage.getItem('user'))

const AuthSlice = createSlice({
    name : 'kbauth',
    initialState : {
        user : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : builder =>{
        builder
        .addCase(registerUser.pending , (state , action) =>{
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        })
        .addCase(registerUser.fulfilled , (state , action) =>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected , (state , action) =>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        })

        .addCase(loginUser.pending , (state , action) =>{
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        })
        .addCase(loginUser.fulfilled , (state , action) =>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(loginUser.rejected , (state , action) =>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        })

        .addCase(logOutUser.fulfilled , (state , action) =>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.user = null
        })
    }
})

export default AuthSlice.reducer


// Register User
export const registerUser = createAsyncThunk('AUTH/REGISTER' , async (FormData) =>{
    try {
        return await register(FormData)
        // console.log(FormData);
    } catch (error) {
        console.log(error);
    }
})

// Login User
export const loginUser = createAsyncThunk('AUTH/LOGIN' , async (FormData) =>{
    try {
        return await login(FormData)
    } catch (error) {
        console.log(error``);
    }
})


// LogOut User
export const logOutUser = createAsyncThunk('AUTH/LOGOUT' , async () =>{
   localStorage.removeItem('user')
})