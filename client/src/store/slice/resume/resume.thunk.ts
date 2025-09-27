import { createAsyncThunk } from "@reduxjs/toolkit";
// @ts-ignore
import axiosInstance from "../../../components/utilities/axiosInstance";

interface resumeData {
    personalInfo : object;
    educationData : object;
    experience : object;
    projects : object;
    technicalSkills : object;
    achievements : object;
}

export const resumeThunker = createAsyncThunk("/createResume",async({
            personalInfo, 
            educationData, 
            experience, 
            projects, 
            technicalSkills, 
            achievements
        }:resumeData,{rejectWithValue})=>{
    try {
        let resumeInfo = await axiosInstance.post("/createResume",{
            personalInfo, 
            educationData, 
            experience, 
            projects, 
            technicalSkills, 
            achievements
        })

        return resumeInfo.data
    } catch (error:any) {
         let errorInfo = error?.response?.data?.errMessage
         return rejectWithValue(errorInfo)
    }
})

export const getResumeData = createAsyncThunk("/getResume",async(_,{rejectWithValue})=>{
    try {
        let getData = await axiosInstance.get("/getResume")
        
        return getData.data
    } catch (error:any) {
        let errorInfo = error?.response?.data?.errMessage
         return rejectWithValue(errorInfo)
    }
})