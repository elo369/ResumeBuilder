import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import {getResumeData, resumeThunker} from "./resume.thunk";

interface ResumeState {
    loading:boolean,
    resumeInfoStore:any,
    collectData:object,
    template:string
}

let initialState:ResumeState ={
 loading : false,
 resumeInfoStore:null,
 collectData:{},
 template:""
}

export const resumeSlice = createSlice({
    name:"resume",
    initialState,
    reducers:{
        updateDataResume :(state,action)=>{
          state.collectData = {...state.collectData,...action.payload}
        },
        useTemplate:(state,action)=>{
          state.template=action.payload
        }   
    },
    extraReducers:(builder)=>{
    builder.addCase(resumeThunker.pending,(state)=>{
        state.loading = true
    })
    builder.addCase(resumeThunker.fulfilled,(state,action)=>{
        state.loading = false;
        state.resumeInfoStore = action?.payload
    })
    builder.addCase(resumeThunker.rejected,(state)=>{
        state.loading = true
    })
    builder.addCase(getResumeData.pending,(state)=>{
        state.loading = true
    })
    builder.addCase(getResumeData.fulfilled,(state,action)=>{
        state.loading = false;
        state.collectData = action?.payload
    })
    builder.addCase(getResumeData.rejected,(state)=>{
        state.loading = true
    })
    }
})

export const {updateDataResume,useTemplate} = resumeSlice.actions

export default resumeSlice.reducer
