import { configureStore } from "@reduxjs/toolkit";
import TransactionReducer from "./KhataBook/KBSlice"
import AuthReducer from "./auth/AuthSlice"

const Store = configureStore({
    reducer : {
        KhataBook : TransactionReducer,
        kbauth : AuthReducer,
    }
})


export default Store;