import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/axios";
import toast from "react-hot-toast";


const initialState = {
    isLogin : false,
    profile: null,
    role: null,
};



export const login = createAsyncThunk('/login/auth',async(data)=>{
    
    try {
        const response = instance.post('/api/auth/login',data)
    
        toast.promise(response , {
            success:"user login successfully",
            loading:"please wait user data validation"
        })

        return (await response).data

    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
    }
}) 

export const logoutUser = createAsyncThunk('/logout' , async()=>{
    try {
        const response =  instance.get('/api/auth/logout')

        toast.promise(response , {
            success:"user logout successfully",
            loading:"please wait user data validation"
        })

        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
        
    }
})


export const registerUser =  createAsyncThunk('/user/register',async(data)=>{
    try {
        const response = instance.post('/api/auth/register',data)
    
        toast.promise(response , {
            success:"user register successfully",
            loading:"please wait user data validation"
        })

        return (await response).data

    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
    }
})
const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled ,(state , {payload})=>{
            if (payload.code === 1) {
                state.isLogin = true
                state.role = payload.data.role
                state.profile = payload.data 
            }
            
        })
        builder.addCase(logoutUser.fulfilled , (state , {payload}) => {
            if (payload?.code === 1) {
                state.isLogin = false
                state.profile = null
                state.role = null
            }
        })
        builder.addCase(registerUser.fulfilled , (state , {payload})=>{
            if (payload.code === 1) {
                state.isLogin = true
                state.role = payload.data.role
                state.profile = payload.data 
            }
        })
    }
})

export const authReduser = authSlice.reducer