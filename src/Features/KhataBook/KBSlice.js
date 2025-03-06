import { createSlice } from "@reduxjs/toolkit";

const KhataBookSlice = createSlice({
    name : "KhataBook",
    initialState : {
        AllTransactions : [
            {id:1, text : "Salary", amount : 5000, type : "Credit"},
        ],
        Edit : {AllTransaction : {}, isEdit : false},
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {

        // Add
        Add : (state , action) =>{
            return {
                ...state,
                AllTransactions :  [action.payload , ...state.AllTransactions]
            }
        },

        // Edit
        edit : (state , action) =>{
            return{
                ...state,
                Edit : {AllTransaction : action.payload, isEdit : true}
            }
        },

        // Remove
        remove : (state, action) =>{
            return{
                ...state,
                AllTransactions : state.AllTransactions.filter((item) => item.id !== action.payload)
            }
        }, 

        // Update
        update : (state , action) =>{
            return{
                ...state,
                AllTransactions : state.AllTransactions.map(updated => updated.id === action.payload.id ? action.payload : updated),
                Edit : {AllTransaction : {}, isEdit : false}
            }
        }

    }
})

export const { Add , edit , remove , update } = KhataBookSlice.actions;
export default KhataBookSlice.reducer;