import {configureStore} from "@reduxjs/toolkit";
import resumeReducer  from "./slice/resume/resume.slice";

export const store = configureStore({
    reducer:{
        resumeReducer
    }
})

// ✅ Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;